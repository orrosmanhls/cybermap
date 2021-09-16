import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {
  component: "div",
};
