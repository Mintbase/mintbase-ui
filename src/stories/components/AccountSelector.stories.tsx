import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import MbAccountSelector from "../../components/inputs/account-selector/AccountSelector";

export default {
  title: "Components/Inputs",
  component: MbAccountSelector,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelector>;

const Template: ComponentStory<typeof MbAccountSelector> = (args) => {
  const [inputList, setInputList] = useState([
    { placeholder: "mintbase.near", value: "" },
  ]);

  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index]["value"] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    if (inputList.length === 1) return;
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    if (inputList.length + 1 === 20) return;
    setInputList([...inputList, { placeholder: "mintbase.near", value: "" }]);
  };

  return (
    <MbAccountSelector
      maxAmount={20}
      inputList={inputList}
      removeInputHandler={handleRemoveClick}
      inputChangeHandler={handleInputChange}
      title="Accounts"
      subtitle="Add accounts to easily switch between."
      smallSubtitle="Add up to 20 accounts"
      footerTitle="Add Another Account"
      footerAction={handleAddClick}
    />
  );
};

export const AccountSelector = Template.bind({});
AccountSelector.args = {};
