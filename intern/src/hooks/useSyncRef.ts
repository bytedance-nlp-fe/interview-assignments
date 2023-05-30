import React from "react";

export function useSyncRefs<TType>(
  ...refs: (React.MutableRefObject<TType | null> | ((instance: TType) => void) | null)[]
) {
  const cache = React.useRef(refs);

  React.useEffect(() => {
    cache.current = refs;
  }, [refs]);

  return (value: TType) => {
    for (const ref of cache.current) {
      if (ref == null) continue;
      if (typeof ref === "function") ref(value);
      else ref.current = value;
    }
  };
}
