let currentId = 0;

export function useId() {
  const res = currentId;
  currentId++;
  return res;
}
