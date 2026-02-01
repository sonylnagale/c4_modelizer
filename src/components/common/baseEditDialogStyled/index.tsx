import { ColorStyle } from "@theme/theme";
import {
  alpha,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  PaperProps,
  Theme,
} from "@mui/material";
import { styled } from "@mui/system";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    bgcolor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: 8,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 32px rgba(0, 0, 0, 0.4)"
        : "0 8px 24px rgba(0, 0, 0, 0.15)",
  },
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
  paddingTop: 24,
  paddingBottom: 24,
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.text.primary, 0.08),
  },
}));

export const DeleteButton = styled(IconButton)(() => ({
  color: "#ff5252",
  "&:hover": {
    backgroundColor: "rgba(255, 82, 82, 0.1)",
  },
}));

export const createDialogPaperStyles = (
  theme: ColorStyle,
  muiTheme: Theme
) => ({
  bgcolor: muiTheme.palette.background.paper,
  color: muiTheme.palette.text.primary,
  border: `1px solid ${theme.border}4D`, // 30% opacity
  borderRadius: 8,
  boxShadow:
    muiTheme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.4)"
      : "0 8px 24px rgba(0, 0, 0, 0.15)",
});

export const createDialogTitleStyles = (theme: ColorStyle) => ({
  borderBottom: `1px solid ${theme.border}33`, // 20% opacity
  paddingBottom: 16,
  "& .MuiTypography-root": {
    fontWeight: 600,
    background: `linear-gradient(90deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const createDialogActionsStyles = (theme: ColorStyle) => ({
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 16,
  paddingBottom: 16,
  borderTop: `1px solid ${theme.border}33`, // 20% opacity
});

export const createSaveButtonStyles = (
  theme: ColorStyle,
  muiTheme: Theme
) => ({
  background: theme.gradient,
  color: muiTheme.palette.mode === "light" ? muiTheme.palette.text.primary : "#fff",
  "&:hover": {
    background: theme.gradientHover,
  },
  "&.Mui-disabled": {
    background: `${theme.border}1A`, // 10% opacity
    color: muiTheme.palette.text.disabled,
  },
});

export const DialogPaper = (props: PaperProps & { theme?: ColorStyle }) => {
  const { theme, ...otherProps } = props;
  return (
    <Paper
      {...otherProps}
      sx={theme ? createDialogPaperStyles(theme) : undefined}
    />
  );
};

export const StyledDialogTitle = (
  props: React.ComponentProps<typeof DialogTitle> & { theme?: ColorStyle }
) => {
  const { theme, ...otherProps } = props;
  return (
    <DialogTitle
      {...otherProps}
      sx={theme ? createDialogTitleStyles(theme) : undefined}
    />
  );
};

export const StyledDialogActions = (
  props: React.ComponentProps<typeof DialogActions> & { theme?: ColorStyle }
) => {
  const { theme, ...otherProps } = props;
  return (
    <DialogActions
      {...otherProps}
      sx={theme ? createDialogActionsStyles(theme) : undefined}
    />
  );
};

export const SaveButton = (
  props: React.ComponentProps<typeof Button> & { theme?: ColorStyle }
) => {
  const { ...otherProps } = props;
  return <Button {...otherProps} />;
};
