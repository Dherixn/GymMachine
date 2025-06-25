jest.mock('openai', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [{ message: { content: 'hello' } }],
          }),
        },
      },
    })),
  };
});

import { createChatCompletion } from '../src/openai';
import OpenAI from 'openai';

describe('createChatCompletion', () => {
  it('returns message content from OpenAI', async () => {
    const result = await createChatCompletion('hi');
    expect(result).toBe('hello');
    const instance = (OpenAI as jest.MockedClass<typeof OpenAI>).mock
      .results[0].value;
    expect(instance.chat.completions.create).toHaveBeenCalled();
  });
});
