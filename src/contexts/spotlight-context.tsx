"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SpotlightContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SpotlightContext = createContext<SpotlightContextValue | null>(null);

export function SpotlightProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  const value = useMemo(
    () => ({ open, setOpen, toggle }),
    [open, toggle],
  );

  return (
    <SpotlightContext.Provider value={value}>
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);
  if (!ctx) {
    throw new Error("useSpotlight must be used within SpotlightProvider");
  }
  return ctx;
}
