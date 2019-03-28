import React from "react";
import { addParameters, configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

function loadStories() {
  require("../src/stories");
}

const theme = {
  textPrimary: "#2C2D33",
  textSecondary: "#A0A4B8",
  accentPrimary: "#21D19F",
  accentSecondary: "#45B69C",
  accentNeutral: "#FFFFFF",
  accentLight: "#D8DDEF",
  background: "#FFFFFF",
  warning: "#FF6363"
};

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
