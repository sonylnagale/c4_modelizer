import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, dayTheme } from "@theme/theme";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeMode = "day" | "dark";

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "c4-theme-mode";

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "day";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "dark" ? "dark" : "day";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, mode);
    }
  }, [mode]);

  const theme = useMemo(() => (mode === "dark" ? darkTheme : dayTheme), [mode]);

  const toggleMode = () => {
    setModeState((prev) => (prev === "dark" ? "day" : "dark"));
  };

  const setMode = (nextMode: ThemeMode) => {
    setModeState(nextMode);
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = (): ThemeModeContextValue => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return context;
};
