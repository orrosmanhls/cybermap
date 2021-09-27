import { ComponentStory, ComponentMeta } from "@storybook/react";

import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
