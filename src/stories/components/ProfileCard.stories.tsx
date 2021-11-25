import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProfileCard from "../../components/cards/profile/ProfileCard";

export default {
  title: "Components/Cards",
  component: ProfileCard,
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  centerElement: (
    <img
      className="h-full w-full rounded-full object-cover"
      src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
    />
  ),
  title: "Account Name",
};
