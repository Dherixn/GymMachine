import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { onboardingSchema, OnboardingData } from '@gympro/utils';
import { create } from 'zustand';

interface State { data?: OnboardingData }
const useStore = create<State>(() => ({}));

export default function Onboarding() {
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const submit = () => {
    const parse = onboardingSchema.safeParse({
      weightKg: Number(weight),
      heightCm: 180,
      age: 30,
      sex: 'M',
      activityLevel: 'medium',
      somatotype: 'mesomorph',
      goal: 'recomposition',
    });
    if (parse.success) {
      useStore.setState({ data: parse.data });
      setMessage('Saved');
    } else {
      setMessage('Invalid');
    }
  };
  return (
    <View style={{ padding: 40 }}>
      <Text>Weight</Text>
      <TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" />
      <Button title="Save" onPress={submit} />
      <Text>{message}</Text>
    </View>
  );
}
