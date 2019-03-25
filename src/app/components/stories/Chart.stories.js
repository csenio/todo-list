import React from "react";
import { storiesOf } from "@storybook/react";
import { Chart } from "..";
import { theme } from "../../theme";

export default storiesOf("Chart", module)
  .add("default", () => <Chart theme={theme} />)
  .add("20%", () => <Chart theme={theme} percentage={20} />)
  .add("100%", () => <Chart theme={theme} percentage={100} />);
