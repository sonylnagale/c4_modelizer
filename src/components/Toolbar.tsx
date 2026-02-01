import { FlatC4Model } from "@archivisio/c4-modelizer-sdk";
import { ToolbarIconButton } from "@components/common/ToolbarIconButton";
import AddIcon from "@mui/icons-material/Add";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import LightModeIcon from "@mui/icons-material/LightMode";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  alpha,
  AppBar,
  Box,
  Switch,
  Toolbar as MuiToolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import PortalTarget from "@slots/PortalTarget";
import { useThemeMode } from "@contexts/ThemeModeContext";
import React, { forwardRef, useRef } from "react";
import { useTranslation } from "react-i18next";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, #051937 0%, #004d7a 100%)"
      : `linear-gradient(90deg, ${alpha(
          theme.palette.primary.main,
          0.08
        )} 0%, ${alpha(theme.palette.primary.light, 0.18)} 100%)`,
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
}));

const AppTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 600,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, #51a2ff 0%, #8ed6ff 100%)"
      : `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${
          theme.palette.primary.light
        } 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "0.5px",
}));

const HiddenInput = styled("input")(() => ({
  display: "none",
}));

const ThemeToggle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginLeft: 8,
}));

export interface ToolbarProps {
  onAddSystem: () => void;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  model: FlatC4Model;
}

const Toolbar = forwardRef<HTMLButtonElement, ToolbarProps>(
  (
    { onAddSystem, onExport, onImport, onReset, model }: ToolbarProps,
    resetButtonRef: React.Ref<HTMLButtonElement>
  ) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { t } = useTranslation();
    const muiTheme = useTheme();
    const { mode, toggleMode } = useThemeMode();

    return (
      <StyledAppBar position="static" elevation={0}>
        <MuiToolbar>
          <AppTitle variant="h6">
            {t("app_title", { Level: model.viewLevel })}
          </AppTitle>
          <PortalTarget id="toolbar-actions-before" />
          <Tooltip title={t("add_block")} arrow>
            <div>
              <ToolbarIconButton
                data-testid="toolbar-add-system"
                onClick={onAddSystem}
                aria-label={t("add_block")}
              >
                <AddIcon />
              </ToolbarIconButton>
            </div>
          </Tooltip>
          <Tooltip title={t("export_json")} arrow>
            <div>
              <ToolbarIconButton
                data-testid="toolbar-export-model"
                onClick={onExport}
                aria-label={t("export_json")}
              >
                <DownloadIcon />
              </ToolbarIconButton>
            </div>
          </Tooltip>
          <Tooltip title={t("import_json")} arrow>
            <div>
              <ToolbarIconButton
                data-testid="toolbar-import-model"
                onClick={() => fileInputRef.current?.click()}
                aria-label={t("import_json")}
              >
                <UploadFileIcon />
                <HiddenInput
                  type="file"
                  accept="application/json"
                  ref={fileInputRef}
                  data-testid="toolbar-file-input"
                  onChange={onImport}
                />
              </ToolbarIconButton>
            </div>
          </Tooltip>
          <Tooltip title={t("reset_store")} arrow>
            <div>
              <ToolbarIconButton
                data-testid="toolbar-reset-model"
                onClick={onReset}
                aria-label={t("reset_store")}
                ref={resetButtonRef as React.Ref<HTMLButtonElement>}
                sx={{ marginRight: 0 }}
              >
                <DeleteIcon />
              </ToolbarIconButton>
            </div>
          </Tooltip>
          <Tooltip
            title={mode === "dark" ? "Switch to day theme" : "Switch to dark theme"}
            arrow
          >
            <ThemeToggle>
              <LightModeIcon
                fontSize="small"
                sx={{
                  color:
                    mode === "day"
                      ? muiTheme.palette.primary.main
                      : muiTheme.palette.text.secondary,
                }}
              />
              <Switch
                checked={mode === "dark"}
                onChange={toggleMode}
                inputProps={{ "aria-label": "toggle theme" }}
                size="small"
              />
              <DarkModeIcon
                fontSize="small"
                sx={{
                  color:
                    mode === "dark"
                      ? muiTheme.palette.primary.main
                      : muiTheme.palette.text.secondary,
                }}
              />
            </ThemeToggle>
          </Tooltip>
          <PortalTarget id="toolbar-actions-after" />
        </MuiToolbar>
      </StyledAppBar>
    );
  }
);

export default Toolbar;
