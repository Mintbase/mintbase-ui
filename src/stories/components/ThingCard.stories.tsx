import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ThingCard from "../../components/cards/thing/ThingCard";
import Icon from "../../components/icon/Icon";
import { EIconName } from "../../constants/icons";

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
        className="h-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    midLeftText: "Thing Name",
    midRightText: "10 N",
    botLeftImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    botRightText: "5/10",
    botRightIcon: EIconName.EDITIONS,
    onBotLeftImageClick: () => {},
    onCenterElementClick: () => {},
    onUpperLeftClick: () => {},
    onUpperRightClick: () => {},
  },
};
