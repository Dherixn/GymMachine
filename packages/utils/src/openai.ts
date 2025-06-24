/**
 * OpenAI client with retry logic.
 * Client stub for offline usage.
 */
export const createChatCompletion = async (prompt: string): Promise<string> => {
  // TODO: integrate real OpenAI call
  return Promise.resolve(`Response for: ${prompt}`);
};
