import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import MbAccountSelector from "../../components/inputs/account-selector/AccountSelector";
import { EControlStatus } from "../../components/inputs/input-field/inputField";

export default {
  title: "Components/Inputs",
  component: MbAccountSelector,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelector>;

const Template: ComponentStory<typeof MbAccountSelector> = (args) => {
  const [inputList, setInputList] = useState([
    {
      placeholder: "mintbase.near",
      value: "mintbase.near",
      status: EControlStatus.VALID,
    },
  ]);

  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index]["value"] = value;
    if (value.split(".").pop() !== "near") {
      if (value !== "") {
        list[index]["status"] = EControlStatus.INVALID;
      } else {
        list[index]["status"] = EControlStatus.NORMAL;
      }
    } else {
      list[index]["status"] = EControlStatus.VALID;
    }
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    if (inputList.length === 1) return;
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    // if (inputList.length + 1 === 20) return;
    // setInputList([
    //   ...inputList,
    //   {
    //     placeholder: "mintbase.near",
    //     value: "",
    //     status: EControlStatus.NORMAL,
    //   },
    // ]);
    console.log("add another account action");
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
