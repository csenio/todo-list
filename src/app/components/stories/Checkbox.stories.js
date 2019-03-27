import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "..";

export default storiesOf("Checkbox", module)
  .add("default", () => <Checkbox />)
  .add("centered", () => (
    <div
      style={{
        height: 300,
        width: 300,
        display: " flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Checkbox />
    </div>
  ))
  .add("force Checked", () => <Checkbox forceChecked />)
  .add("initiallz Checked", () => <Checkbox checked />)
  .add("onCheck", () => (
    <Checkbox
      onChange={action("value")}
      onCheck={action("checked")}
      onUncheck={action("uncheck")}
    />
  ));
