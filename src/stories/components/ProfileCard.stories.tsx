import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MbSmallCard from "../../components/cards/small/smallCard";
import { ESmallCardType } from "../../constants/properties";

export default {
  title: "Components/Cards",
  component: MbSmallCard,
  argTypes: {},
} as ComponentMeta<typeof MbSmallCard>;

const Template: ComponentStory<typeof MbSmallCard> = (args) => (
  <MbSmallCard {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  cardType: ESmallCardType.PROFILE,
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    title: "Account Name",
  },
};
