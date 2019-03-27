import React from "react";
import { storiesOf } from "@storybook/react";
import { Text, Title, Subtitle } from "..";

export default storiesOf("Typography", module)
  .add("all", () => (
    <div>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <Text>Text Primary</Text>
      <Text secondary>Text Secondary</Text>
      <Text secondary italic strikethrough>
        Text Secondary with styles
      </Text>
    </div>
  ))
  .add("default text", () => (
    <div>
      <Text>Lorem Ipsum Dolor</Text>
    </div>
  ))
  .add("Title", () => (
    <div>
      <Title>Lorem Ipsum Dolor</Title>
    </div>
  ))
  .add("Subtitle", () => (
    <div>
      <Subtitle>Lorem Ipsum Dolor</Subtitle>
    </div>
  ))
  .add("secondary text", () => (
    <div>
      <Text secondary>Lorem Ipsum Dolor</Text>
      <Text colored>Lorem Ipsum Dolor</Text>
      <Text secondary italic>
        Lorem Ipsum Dolor
      </Text>
      <Text secondary italic strikethrough>
        Lorem Ipsum Dolor
      </Text>
    </div>
  ))
  .add("text as span", () => (
    <div>
      <Text as="span" colored>
        Lorem Ipsum Dolor
      </Text>
    </div>
  ));
