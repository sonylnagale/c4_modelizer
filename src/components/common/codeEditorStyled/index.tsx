import { ColorStyle } from "@theme/theme";
import { alpha, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";
import { oneLight, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const getEditorContainerStyles = (
  sx: SxProps<Theme> = {}
): SxProps<Theme> => ({
  mt: 2,
  ...sx,
});

export const getFormLabelStyles = (
  theme: ColorStyle,
  muiTheme: Theme
): SxProps<Theme> => ({
  color: muiTheme.palette.text.secondary,
  mb: 1,
  display: "block",
  "&.Mui-focused": {
    color: theme.gradientEnd,
  },
});

export const getTextFieldStyles = (
  theme: ColorStyle,
  muiTheme: Theme
): SxProps<Theme> => ({
  fontFamily: '"Fira Code", "Roboto Mono", monospace',
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: `rgba(${theme.primaryColor}, 0.3)` },
    "&:hover fieldset": {
      borderColor: `rgba(${theme.primaryColor}, 0.5)`,
    },
    "&.Mui-focused fieldset": { borderColor: theme.gradientStart },
  },
  "& .MuiInputLabel-root": { color: muiTheme.palette.text.secondary },
  "& .MuiInputLabel-root.Mui-focused": { color: theme.gradientEnd },
  "& .MuiInputBase-input": {
    color: muiTheme.palette.text.primary,
    fontFamily: '"Fira Code", "Roboto Mono", monospace',
    backgroundColor: alpha(
      muiTheme.palette.background.default,
      muiTheme.palette.mode === "dark" ? 0.4 : 0.6
    ),
    borderRadius: "4px",
  },
});

export const getEditorClickableBoxStyles = (): SxProps<Theme> => ({
  cursor: "pointer",
});

export const getPlaceholderBoxStyles = (
  theme: ColorStyle,
  muiTheme: Theme
): SxProps<Theme> => ({
  backgroundColor: alpha(
    muiTheme.palette.background.default,
    muiTheme.palette.mode === "dark" ? 0.3 : 0.6
  ),
  border: `1px solid rgba(${theme.primaryColor}, 0.3)`,
  borderRadius: "4px",
  padding: "12px",
  color: muiTheme.palette.text.secondary,
  fontStyle: "italic",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const createSyntaxHighlighterStyle = (
  theme: ColorStyle,
  muiTheme: Theme
): { [key: string]: CSSProperties } => ({
  ...(muiTheme.palette.mode === "dark" ? vscDarkPlus : oneLight),
  'pre[class*="language-"]': {
    ...(
      (muiTheme.palette.mode === "dark" ? vscDarkPlus : oneLight)[
        'pre[class*="language-"]'
      ]
    ),
    margin: 0,
    padding: "12px",
    backgroundColor: alpha(
      muiTheme.palette.background.default,
      muiTheme.palette.mode === "dark" ? 0.3 : 0.6
    ),
    border: `1px solid rgba(${theme.primaryColor}, 0.3)`,
    borderRadius: "4px",
    cursor: "pointer",
    maxHeight: "200px",
    overflowY: "auto",
  },
});
