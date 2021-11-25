import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import StoreCard from "../../components/cards/store/StoreCard";

export default {
  title: "Components/Cards/Store",
  component: StoreCard,
  argTypes: {},
} as ComponentMeta<typeof StoreCard>;

const Template: ComponentStory<typeof StoreCard> = (args) => (
  <StoreCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  centerElement: (
    <img
      className="h-full w-full rounded object-cover"
      src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
    />
  ),
  title: "Store Name",
};
