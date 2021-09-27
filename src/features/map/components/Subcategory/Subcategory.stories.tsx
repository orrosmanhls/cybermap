import { ComponentStory, ComponentMeta } from "@storybook/react";

import Subcategory from "./Subcategory";

export default {
  title: "Components/Subcategory",
  component: Subcategory,
} as ComponentMeta<typeof Subcategory>;

const Template: ComponentStory<typeof Subcategory> = (args) => (
  <Subcategory {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
