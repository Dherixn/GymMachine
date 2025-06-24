import request from 'supertest';
import createApp from '../src/index';

describe('onboarding', () => {
  it('validates input', async () => {
    const app = createApp();
    const res = await request(app)
      .post('/onboarding')
      .send({
        weightKg: 70,
        heightCm: 180,
        age: 30,
        sex: 'M',
        activityLevel: 'medium',
        somatotype: 'mesomorph',
        goal: 'recomposition',
      });
    expect(res.status).toBe(200);
  });
});
