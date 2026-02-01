import { Box, Checkbox, FormControlLabel, Slider } from "@mui/material";
import { styled } from "@mui/system";

export const LabelText = styled('label')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 14,
  marginBottom: 4,
  display: "block",
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiSlider-markLabel": {
    color: theme.palette.text.secondary,
  },
}));

export const StyledFormControlWrapper = styled(Box)(() => ({
  marginTop: 16,
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    width: "0.9em",
    height: "0.9em",
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: theme.palette.text.primary,
    fontSize: 14,
  },
}));
