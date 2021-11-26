import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SmallCard from "../../components/cards/small/smallCard";
import { ESmallCardType } from "../../constants/properties";

export default {
  title: "Components/Cards",
  component: SmallCard,
  argTypes: {},
} as ComponentMeta<typeof SmallCard>;

const Template: ComponentStory<typeof SmallCard> = (args) => (
  <SmallCard {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  cardType: ESmallCardType.PROFILE,
  card: {
    centerElement: (
      <img
        className="h-full w-full rounded-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    title: "Account Name",
  },
};
