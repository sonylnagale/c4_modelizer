import { alpha, IconButton, styled } from "@mui/material";

export const ToolbarIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.12 : 0.08),
  backdropFilter: "blur(4px)",
  marginRight: 8,
  transition: "all 0.2s ease",
  "&:hover": {
    background: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.22 : 0.14),
  },
}));