import { ComponentStory, ComponentMeta } from "@storybook/react";

import SocialIcon from "./SocialIcon";

export default {
  title: "Components/SocialIcon",
  component: SocialIcon,
} as ComponentMeta<typeof SocialIcon>;

const Template: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
