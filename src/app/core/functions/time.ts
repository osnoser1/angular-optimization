export function wait(ms: number) {
  const waitDateOne = new Date();
  while ((new Date() as any) - (waitDateOne as any) <= ms) {
    //Nothing
  }
}
