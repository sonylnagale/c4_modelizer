import { alpha, createTheme, ThemeOptions } from '@mui/material/styles';

export interface ColorStyle {
  primaryColor: string;
  secondaryColor: string;
  background: string;
  gradient: string;
  gradientHover: string;
  border: string;
  hover: string;
  glow: string;
  gradientStart: string;
  gradientEnd: string;
  hoverGradientStart: string;
  hoverGradientEnd: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    c4Colors: {
      system: ColorStyle;
      container: ColorStyle;
      component: ColorStyle;
      code: ColorStyle;
      connection: ColorStyle;
    };
  }
  interface ThemeOptions {
    c4Colors?: {
      system?: ColorStyle;
      container?: ColorStyle;
      component?: ColorStyle;
      code?: ColorStyle;
      connection?: ColorStyle;
    };
  }
}

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(81, 162, 255)",
      light: "rgb(81, 162, 255)",
      dark: "rgb(81, 162, 255)",
      contrastText: '#ffffff',
    },
    secondary: {
      main: "rgb(0, 150, 136)",
      light: "rgb(0, 150, 136)",
      dark: "rgb(0, 150, 136)",
      contrastText: '#ffffff',
    },
    info: {
      main: "rgb(230, 81, 0)",
      light: "rgb(230, 81, 0)",
      dark: "rgb(230, 81, 0)",
      contrastText: '#ffffff',
    },
    error: {
      main: "rgb(106, 27, 154)",
      light: "rgb(106, 27, 154)",
      dark: "rgb(106, 27, 154)",
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a1929',
      paper: '#0b1f33',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (muiTheme) => ({
        ":root": {
          colorScheme: muiTheme.palette.mode,
        },
        body: {
          backgroundColor: muiTheme.palette.background.default,
          color: muiTheme.palette.text.primary,
        },
        ".react-flow__minimap": {
          backgroundColor: alpha(muiTheme.palette.background.paper, 0.9),
          border: `1px solid ${alpha(muiTheme.palette.primary.main, 0.3)}`,
          borderRadius: 4,
          overflow: "hidden",
        },
        ".react-flow__minimap-mask": {
          fill: alpha(muiTheme.palette.primary.main, 0.15),
          stroke: alpha(muiTheme.palette.primary.main, 0.8),
          strokeWidth: 2,
          strokeDasharray: "none",
        },
        ".react-flow__minimap-node": {
          fill: alpha(muiTheme.palette.primary.main, 0.6),
          stroke: alpha(muiTheme.palette.primary.main, 0.8),
          strokeWidth: 1,
        },
        ".react-flow__controls button": {
          backgroundColor: alpha(muiTheme.palette.primary.main, 0.2),
          color: muiTheme.palette.text.primary,
          border: `1px solid ${alpha(muiTheme.palette.primary.main, 0.3)}`,
          borderRadius: 4,
          margin: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".react-flow__controls button:hover": {
          backgroundColor: alpha(muiTheme.palette.primary.main, 0.4),
        },
        ".react-flow__controls button svg": {
          fill: muiTheme.palette.text.primary,
          width: 16,
          height: 16,
        },
      }),
    },
  },
  c4Colors: {
    system: {
      primaryColor: "rgb(81, 162, 255)",
      secondaryColor: "rgb(25, 118, 210)",
      background: "rgba(13, 71, 161, 0.1)",
      gradient:
        "linear-gradient(135deg, rgba(25, 118, 210, 0.15) 0%, rgba(13, 71, 161, 0.1) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(25, 118, 210, 0.25) 0%, rgba(13, 71, 161, 0.2) 100%)",
      border: "#1976d2",
      hover: "#42a5f5",
      glow: "0 0 15px rgba(33, 150, 243, 0.3)",
      gradientStart: "rgba(25, 118, 210, 0.15)",
      gradientEnd: "rgba(13, 71, 161, 0.1)",
      hoverGradientStart: "rgba(25, 118, 210, 0.25)",
      hoverGradientEnd: "rgba(13, 71, 161, 0.2)",
    },
    container: {
      primaryColor: "rgb(0, 150, 136)",
      secondaryColor: "rgb(0, 137, 123)",
      background: "rgba(0, 121, 107, 0.1)",
      gradient:
        "linear-gradient(135deg, rgba(0, 150, 136, 0.15) 0%, rgba(0, 121, 107, 0.1) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(0, 150, 136, 0.25) 0%, rgba(0, 121, 107, 0.2) 100%)",
      border: "#00897b",
      hover: "#26a69a",
      glow: "0 0 15px rgba(0, 150, 136, 0.3)",
      gradientStart: "rgba(0, 150, 136, 0.15)",
      gradientEnd: "rgba(0, 121, 107, 0.1)",
      hoverGradientStart: "rgba(0, 150, 136, 0.25)",
      hoverGradientEnd: "rgba(0, 121, 107, 0.2)",
    },
    component: {
      primaryColor: "rgb(255, 152, 0)",
      secondaryColor: "rgb(245, 124, 0)",
      background: "rgba(255, 152, 0, 0.1)",
      gradient:
        "linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.1) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(255, 152, 0, 0.25) 0%, rgba(255, 152, 0, 0.2) 100%)",
      border: "#f57c00",
      hover: "#ffa726",
      glow: "0 0 15px rgba(255, 152, 0, 0.3)",
      gradientStart: "rgba(255, 152, 0, 0.15)",
      gradientEnd: "rgba(255, 152, 0, 0.1)",
      hoverGradientStart: "rgba(255, 152, 0, 0.25)",
      hoverGradientEnd: "rgba(255, 152, 0, 0.2)",
    },
    code: {
      primaryColor: "rgb(156, 39, 176)",
      secondaryColor: "rgb(123, 31, 162)",
      background: "rgba(156, 39, 176, 0.1)",
      gradient:
        "linear-gradient(135deg, rgba(156, 39, 176, 0.15) 0%, rgba(156, 39, 176, 0.1) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(156, 39, 176, 0.25) 0%, rgba(156, 39, 176, 0.2) 100%)",
      border: "#9c27b0",
      hover: "#ce93d8",
      glow: "0 0 15px rgba(156, 39, 176, 0.3)",
      gradientStart: "rgba(156, 39, 176, 0.15)",
      gradientEnd: "rgba(156, 39, 176, 0.1)",
      hoverGradientStart: "rgba(156, 39, 176, 0.25)",
      hoverGradientEnd: "rgba(156, 39, 176, 0.2)",
    },
    connection: {
      primaryColor: "rgb(0, 176, 255)",
      secondaryColor: "rgb(2, 136, 209)",
      gradientStart: "rgba(0, 176, 255, 0.15)",
      gradientEnd: "rgba(0, 176, 255, 0.1)",
      border: "#01579b",
      hover: "#01579b",
      hoverGradientStart: "rgba(0, 176, 255, 0.25)",
      hoverGradientEnd: "rgba(0, 176, 255, 0.2)",
      background: "rgba(0, 176, 255, 0.1)",
      gradient: "rgba(0, 176, 255, 0.1)",
      gradientHover: "rgba(0, 176, 255, 0.2)",
      glow: "#0288d1",
    },
  },
};

const dayThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "rgb(30, 136, 229)",
      light: "rgb(66, 165, 245)",
      dark: "rgb(13, 71, 161)",
      contrastText: '#ffffff',
    },
    secondary: {
      main: "rgb(0, 150, 136)",
      light: "rgb(38, 166, 154)",
      dark: "rgb(0, 97, 97)",
      contrastText: '#ffffff',
    },
    info: {
      main: "rgb(255, 112, 67)",
      light: "rgb(255, 138, 101)",
      dark: "rgb(216, 67, 21)",
      contrastText: '#ffffff',
    },
    error: {
      main: "rgb(156, 39, 176)",
      light: "rgb(186, 104, 200)",
      dark: "rgb(106, 27, 154)",
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (muiTheme) => ({
        ":root": {
          colorScheme: muiTheme.palette.mode,
        },
        body: {
          backgroundColor: muiTheme.palette.background.default,
          color: muiTheme.palette.text.primary,
        },
        ".react-flow__minimap": {
          backgroundColor: alpha(muiTheme.palette.background.paper, 0.9),
          border: `1px solid ${alpha(muiTheme.palette.primary.main, 0.3)}`,
          borderRadius: 4,
          overflow: "hidden",
        },
        ".react-flow__minimap-mask": {
          fill: alpha(muiTheme.palette.primary.main, 0.15),
          stroke: alpha(muiTheme.palette.primary.main, 0.8),
          strokeWidth: 2,
          strokeDasharray: "none",
        },
        ".react-flow__minimap-node": {
          fill: alpha(muiTheme.palette.primary.main, 0.6),
          stroke: alpha(muiTheme.palette.primary.main, 0.8),
          strokeWidth: 1,
        },
        ".react-flow__controls button": {
          backgroundColor: alpha(muiTheme.palette.primary.main, 0.2),
          color: muiTheme.palette.text.primary,
          border: `1px solid ${alpha(muiTheme.palette.primary.main, 0.3)}`,
          borderRadius: 4,
          margin: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".react-flow__controls button:hover": {
          backgroundColor: alpha(muiTheme.palette.primary.main, 0.4),
        },
        ".react-flow__controls button svg": {
          fill: muiTheme.palette.text.primary,
          width: 16,
          height: 16,
        },
      }),
    },
  },
  c4Colors: {
    system: {
      primaryColor: "rgb(30, 136, 229)",
      secondaryColor: "rgb(13, 71, 161)",
      background: "rgba(30, 136, 229, 0.08)",
      gradient:
        "linear-gradient(135deg, rgba(30, 136, 229, 0.12) 0%, rgba(13, 71, 161, 0.08) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(30, 136, 229, 0.18) 0%, rgba(13, 71, 161, 0.12) 100%)",
      border: "#0277bd",
      hover: "#01579b",
      glow: "0 0 12px rgba(30, 136, 229, 0.2)",
      gradientStart: "rgba(30, 136, 229, 0.12)",
      gradientEnd: "rgba(13, 71, 161, 0.08)",
      hoverGradientStart: "rgba(30, 136, 229, 0.18)",
      hoverGradientEnd: "rgba(13, 71, 161, 0.12)",
    },
    container: {
      primaryColor: "rgb(0, 137, 123)",
      secondaryColor: "rgb(0, 97, 97)",
      background: "rgba(0, 137, 123, 0.08)",
      gradient:
        "linear-gradient(135deg, rgba(0, 137, 123, 0.12) 0%, rgba(0, 97, 97, 0.08) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(0, 137, 123, 0.18) 0%, rgba(0, 97, 97, 0.12) 100%)",
      border: "#00897b",
      hover: "#00695c",
      glow: "0 0 12px rgba(0, 137, 123, 0.2)",
      gradientStart: "rgba(0, 137, 123, 0.12)",
      gradientEnd: "rgba(0, 97, 97, 0.08)",
      hoverGradientStart: "rgba(0, 137, 123, 0.18)",
      hoverGradientEnd: "rgba(0, 97, 97, 0.12)",
    },
    component: {
      primaryColor: "rgb(255, 112, 67)",
      secondaryColor: "rgb(216, 67, 21)",
      background: "rgba(255, 112, 67, 0.08)",
      gradient:
        "linear-gradient(135deg, rgba(255, 112, 67, 0.12) 0%, rgba(216, 67, 21, 0.08) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(255, 112, 67, 0.18) 0%, rgba(216, 67, 21, 0.12) 100%)",
      border: "#ff6e40",
      hover: "#d84315",
      glow: "0 0 12px rgba(255, 112, 67, 0.2)",
      gradientStart: "rgba(255, 112, 67, 0.12)",
      gradientEnd: "rgba(216, 67, 21, 0.08)",
      hoverGradientStart: "rgba(255, 112, 67, 0.18)",
      hoverGradientEnd: "rgba(216, 67, 21, 0.12)",
    },
    code: {
      primaryColor: "rgb(156, 39, 176)",
      secondaryColor: "rgb(106, 27, 154)",
      background: "rgba(156, 39, 176, 0.08)",
      gradient:
        "linear-gradient(135deg, rgba(156, 39, 176, 0.12) 0%, rgba(106, 27, 154, 0.08) 100%)",
      gradientHover:
        "linear-gradient(135deg, rgba(156, 39, 176, 0.18) 0%, rgba(106, 27, 154, 0.12) 100%)",
      border: "#8e24aa",
      hover: "#6a1b9a",
      glow: "0 0 12px rgba(156, 39, 176, 0.2)",
      gradientStart: "rgba(156, 39, 176, 0.12)",
      gradientEnd: "rgba(106, 27, 154, 0.08)",
      hoverGradientStart: "rgba(156, 39, 176, 0.18)",
      hoverGradientEnd: "rgba(106, 27, 154, 0.12)",
    },
    connection: {
      primaryColor: "rgb(0, 172, 193)",
      secondaryColor: "rgb(0, 131, 143)",
      gradientStart: "rgba(0, 172, 193, 0.12)",
      gradientEnd: "rgba(0, 131, 143, 0.08)",
      border: "#00838f",
      hover: "#006064",
      hoverGradientStart: "rgba(0, 172, 193, 0.18)",
      hoverGradientEnd: "rgba(0, 131, 143, 0.12)",
      background: "rgba(0, 172, 193, 0.08)",
      gradient: "linear-gradient(135deg, rgba(0, 172, 193, 0.12) 0%, rgba(0, 131, 143, 0.08) 100%)",
      gradientHover: "linear-gradient(135deg, rgba(0, 172, 193, 0.18) 0%, rgba(0, 131, 143, 0.12) 100%)",
      glow: "0 0 12px rgba(0, 172, 193, 0.2)",
    },
  },
};

const darkTheme = createTheme(darkThemeOptions);
const dayTheme = createTheme(dayThemeOptions);

export { dayTheme, darkTheme };
export default dayTheme;
