import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ThingCard from "../../components/cards/thing/ThingCard";

export default {
  title: "Components/Cards/Thing",
  component: ThingCard,
  argTypes: {},
} as ComponentMeta<typeof ThingCard>;

const Template: ComponentStory<typeof ThingCard> = (args) => (
  <ThingCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  cardInfo: {
    upperLeftText: "1",
    centerImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    midLeftText: "Thing Name",
    midRightText: "10 N",
    botLeftImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    botRightText: "5/10",
    onBotLeftImageClick: () => {},
    onCenterImageClick: () => {},
    onUpperLeftClick: () => {},
    onUpperRightClick: () => {},
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
