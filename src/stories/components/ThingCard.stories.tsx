import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ThingCard from "../../components/cards/thing/ThingCard";

export default {
  title: "Components/Cards",
  component: ThingCard,
  argTypes: {},
} as ComponentMeta<typeof ThingCard>;

const Template: ComponentStory<typeof ThingCard> = (args) => (
  <ThingCard {...args} />
);

export const Thing = Template.bind({});
Thing.args = {
  cardInfo: {
    upperLeftText: "1",
    centerElement: (
      <img
        className="h-full rounded"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    midLeftText: "Thing Name",
    midRightText: "10 N",
    botLeftImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    botRightText: "5/10",
    onBotLeftImageClick: () => {},
    onCenterElementClick: () => {},
    onUpperLeftClick: () => {},
    onUpperRightClick: () => {},
  },
};
