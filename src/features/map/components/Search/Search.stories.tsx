import { ComponentStory, ComponentMeta } from "@storybook/react";

import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Test1 = Template.bind({});
Test1.args = {};
