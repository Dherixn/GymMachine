import { onboardingSchema } from '../src/validators';

test('valid onboarding data', () => {
  const result = onboardingSchema.safeParse({
    weightKg: 70,
    heightCm: 180,
    age: 25,
    sex: 'M',
    activityLevel: 'low',
    somatotype: 'ectomorph',
    goal: 'fat_loss',
  });
  expect(result.success).toBe(true);
});
