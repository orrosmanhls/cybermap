import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Example from "./Example";

export default {
  title: "Example/Example",
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {
  text: "This is a test",
};

export const Test2 = Template.bind({});
Test2.args = {
  text: "This is another test",
};
