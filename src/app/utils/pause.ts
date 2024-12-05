export function pause(timeout: number) {
  return new Promise((resolve: (value?: unknown) => void) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
