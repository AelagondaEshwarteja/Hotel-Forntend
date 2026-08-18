import { useCallback, useEffect, useRef, useState } from "react";

export function useToast(durationMs = 2400) {
  const [message, setMessage] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const showToast = useCallback(
    (nextMessage: string) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      setMessage(nextMessage);
      timerRef.current = window.setTimeout(() => setMessage(null), durationMs);
    },
    [durationMs],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { message, showToast };
}
