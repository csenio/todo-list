import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "..";
import { theme } from "../../theme";

export default storiesOf("Checkbox", module)
  .add("default", () => <Checkbox theme={theme} onClick={action("clicked")} />)
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
      <Checkbox theme={theme} onClick={action("clicked")} />
    </div>
  ));
