import { ComponentStory, ComponentMeta } from "@storybook/react";

import DisplaySwitch from "./DisplaySwitch";

export default {
  title: "Components/DisplaySwitch",
  component: DisplaySwitch,
} as ComponentMeta<typeof DisplaySwitch>;

const Template: ComponentStory<typeof DisplaySwitch> = (args) => (
  <DisplaySwitch {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {
  text: "This is a test",
};
