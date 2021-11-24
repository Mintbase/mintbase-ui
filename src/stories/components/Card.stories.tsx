import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NftCard from "../../components/cards/NftCard";

export default {
  title: "Components/Cards/NftCard",
  component: NftCard,
  argTypes: {},
} as ComponentMeta<typeof NftCard>;

const Template: ComponentStory<typeof NftCard> = (args) => (
  <NftCard {...args} />
);

export const Architecture = Template.bind({});
Architecture.args = {
  nftInfo: {
    title: "Thing Name",
    price: "10 N",
    likeAmount: 50,
    availableEditions: 5,
    totalEditions: 10,
    nftImg:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    thingId:
      "2rrn46P9WAd_-taOOG9ns-M09f2zz69U56tLAwXbIC0:communitymints.mintbase1.near",
    ownerId: "communitymints.mintbase1.near",
    ownerImg:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
    liked: true,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
