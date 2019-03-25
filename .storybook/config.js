import { addParameters, configure } from "@storybook/react";
// import { addDecorator } from "@storybook/react";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";

function loadStories() {
  require("../src/stories");
}

// const themeNormal = {
//   textPrimary: "#2C2D33",
//   textSecondary: "#A0A4B8",
//   accentPrimary: "#21D19F",
//   accentSecondary: "#45B69C",
//   accentNeutral: "#FFFFFF",
//   accentLight: "#D8DDEF",
//   background: "#FFFFFF"
// };

// const themes = [themeNormal];
// addDecorator(withThemesProvider(themes));

configure(loadStories, module);
