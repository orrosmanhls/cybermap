import { ComponentStory, ComponentMeta } from "@storybook/react";

import Section from "./Section";

export default {
  title: "Components/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
