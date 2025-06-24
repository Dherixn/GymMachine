import express from 'express';
import cors from 'cors';
import { onboardingSchema } from '../../../utils/src';

const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.post('/onboarding', (req, res) => {
    const parse = onboardingSchema.safeParse(req.body);
    if (!parse.success) return res.status(400).json(parse.error);
    return res.json({ success: true, data: parse.data });
  });
  return app;
};

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => console.log(`API listening on ${port}`));
}

export default createApp;
