import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavbarItem from "./MenuItem";

export default {
  title: "Components/NavbarItem",
  component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

const Template: ComponentStory<typeof NavbarItem> = (args) => (
  <NavbarItem {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {
  text: "This is a test",
};
