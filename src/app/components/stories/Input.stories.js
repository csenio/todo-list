import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "..";

export default storiesOf("Input", module).add("text input", () => (
  <Input type="text" />
));
