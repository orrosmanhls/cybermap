import { ComponentStory, ComponentMeta } from "@storybook/react";

import Category from "./Category";

export default {
  title: "Components/Category",
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
