export const lightPaletteText = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)",
};

export const darkPaletteText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(148, 163, 184)",
  disabled: "rgb(156, 163, 175)",
};

const themesConfig = {
  light: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#b3d1d1",
        main: "#006565",
        dark: "#003737",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#ffecc0",
        main: "#FFBE2C",
        dark: "#ff9910",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FAFAFA",
        default: "#F0F7F7",
        red: "#FF0000",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D7D3ED",
        main: "#796CC4",
        dark: "#493DA2",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2e3640",
        default: "#232931",
        red: "#FF0000",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
};

export default themesConfig;
