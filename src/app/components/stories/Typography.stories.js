import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "..";

export default storiesOf("Typography", module)
  .add("default", () => (
    <div>
      <Text>Lorem Ipsum Dolor</Text>
    </div>
  ))
  .add("secondary", () => (
    <div>
      <Text secondary>Lorem Ipsum Dolor</Text>
      <Text secondary italic>
        Lorem Ipsum Dolor
      </Text>
    </div>
  ))
  .add("colored", () => (
    <div>
      <Text colored>Lorem Ipsum Dolor</Text>
    </div>
  ))
  .add("as span", () => (
    <div>
      <Text as="span" colored>
        Lorem Ipsum Dolor
      </Text>
    </div>
  ));
