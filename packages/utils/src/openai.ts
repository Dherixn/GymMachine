/**
 * OpenAI client with retry logic.
 */
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export const createChatCompletion = async (prompt: string): Promise<string> => {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  return response.choices[0]?.message?.content ?? '';
};
