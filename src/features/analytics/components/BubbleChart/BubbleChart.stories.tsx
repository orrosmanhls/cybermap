import { ComponentStory, ComponentMeta } from "@storybook/react";

import BubbleChart from "./BubbleChart";

export default {
  title: "Components/BubbleChart",
  component: BubbleChart,
} as ComponentMeta<typeof BubbleChart>;

const Template: ComponentStory<typeof BubbleChart> = (args) => (
  <BubbleChart {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
