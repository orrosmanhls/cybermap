import { ComponentStory, ComponentMeta } from "@storybook/react";

import CompanyCard from "./CompanyCard";

export default {
  title: "Components/CompanyCard",
  component: CompanyCard,
} as ComponentMeta<typeof CompanyCard>;

const Template: ComponentStory<typeof CompanyCard> = (args) => (
  <CompanyCard {...args} />
);

export const Test1 = Template.bind({});
Test1.args = {};
