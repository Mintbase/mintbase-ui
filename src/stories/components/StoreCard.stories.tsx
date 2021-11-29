import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SmallCard from "../../components/cards/small/smallCard";

export default {
  title: "Components/Cards",
  component: SmallCard,
  argTypes: {},
} as ComponentMeta<typeof SmallCard>;

const Template: ComponentStory<typeof SmallCard> = (args) => (
  <SmallCard {...args} />
);

export const Store = Template.bind({});
Store.args = {
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    title: "Store Name",
  },
};
