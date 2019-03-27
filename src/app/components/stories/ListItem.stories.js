import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListItem } from "..";

export default storiesOf("ListItem", module)
  .add("default", () => (
    <ListItem onChange={action("onChange")}>Lorem Ipsum</ListItem>
  ))
  .add("input", () => (
    <ListItem input onChange={action("onChange")}>
      Lorem Ipsum
    </ListItem>
  ));
