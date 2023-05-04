import { createTheme } from "@nextui-org/react";

import { darkTransparent } from "./colors";

export function getThemeConfig(type = "light") {
  return createTheme({
    type,
    theme: {
      colors: {
        blue50: "#EAFAFF",
        blue100: "#BBE2EF",
        blue200: "#8AC9DD",
        blue300: "#66B4CD",
        blue400: "#3E9CBB",
        blue500: "#2E90B0",
        blue600: "#1A7FA0",
        blue700: "#73a85f",
        blue800: "#033646",
        blue900: "#002B39",
        blue1000: "#091720",

        purple50: "#FFF6F3",
        purple100: "#FEEFDD",
        purple200: "#FDDBBC",
        purple300: "#FBC19A",
        purple400: "#F7A880",
        purple500: "#73a85f",
        purple600: "#D05B3F",
        purple700: "#AE3C2B",
        purple800: "#8C221B",
        purple900: "#741012",

        green50: "#E9FFF2",
        green100: "#C0F1D4",
        green200: "#95E5B5",
        green300: "#73D199",
        green400: "#45CC7B",
        green500: "#20D267",
        green600: "#0FC457",
        green700: "#04B149",
        green800: "#05983F",
        green900: "#00762F",

        red50: "#FFF4F4",
        red100: "#FEDDDD",
        red200: "#FBC0C0",
        red300: "#FCA5A5",
        red400: "#F48484",
        red500: "#F36060",
        red600: "#EF4444",
        red700: "#E53232",
        red800: "#DE1313",
        red900: "#C90808",

        primary: "$blue700",
        secondary: "$purple500",

        primaryLight: "$blue200",
        primaryLightHover: "$blue300",
        primaryLightActive: "$blue400",
        primaryLightContrast: "$blue600",
        primaryBorder: "$blue500",
        primaryBorderHover: "$blue600",
        primarySolidHover: "$blue700",
        primarySolidContrast: "$blue50",
        primaryShadow: "$blue500",

        secondaryLight: "$purple200",
        secondaryLightHover: "$purple300",
        secondaryLightActive: "$purple400",
        secondaryLightContrast: "$purple600",
        secondaryBorder: "$purple500",
        secondaryBorderHover: "$purple600",
        secondarySolidHover: "$purple500",
        secondarySolidContrast: "$purple50",
        secondaryShadow: "$purple500",

        gradient: "linear-gradient(112deg, $blue600 -3.59%, $blue700 -20.3%, $purple500 90.46%)",
        gradientShadow: "linear-gradient(112deg, $blue600 -3.59%, $blue700 -20.3%, $purple500 90.46%)",
        link: "#5E1DAD",
        background: "#FFFFFF",
        headerBackground: darkTransparent(0.8),
        mainNavBackground: darkTransparent(0.8),
      },
      space: {},
      fonts: {
        sans: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
      },
      fontWeights: {
        lighter: "300",
        normal: "500",
        medium: "700",
        bold: "800",
      }
    }
  });
}
