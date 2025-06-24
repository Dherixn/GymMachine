import { z } from 'zod';

export const onboardingSchema = z.object({
  weightKg: z.number().min(30).max(300),
  heightCm: z.number().min(100).max(250),
  age: z.number().min(12).max(99),
  sex: z.enum(['M', 'F']),
  activityLevel: z.enum(['low', 'medium', 'high']),
  somatotype: z.enum(['ectomorph', 'mesomorph', 'endomorph']),
  goal: z.enum(['fat_loss', 'muscle_gain', 'recomposition']),
});
export type OnboardingData = z.infer<typeof onboardingSchema>;
