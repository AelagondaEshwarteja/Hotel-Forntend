export async function delayedResponse<T>(payload: T, delayMs = 600): Promise<T> {
  await new Promise((resolve) => window.setTimeout(resolve, delayMs));
  return payload;
}
