import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import MbInputAccount from "../../components/inputs/input-account/InputAccount";
import { EControlStatus } from "../../components/inputs/input-field/inputField";

export default {
  title: "Components/Inputs",
  component: MbInputAccount,
  argTypes: {},
} as ComponentMeta<typeof MbInputAccount>;

const Template: ComponentStory<typeof MbInputAccount> = (args) => {
  const [inputList, setInputList] = useState([
    {
      wallet: {
        placeholder: "mintbase.near",
        value: "",
        status: EControlStatus.NORMAL,
      },
      account: {
        placeholder: "mintbase.near",
        value: "",
        status: EControlStatus.NORMAL,
      },
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
    if (inputList.length + 1 === 25) return;
    setInputList([
      ...inputList,
      {
        wallet: {
          placeholder: "mintbase.near",
          value: "",
          status: EControlStatus.NORMAL,
        },
        account: {
          placeholder: "mintbase.near",
          value: "",
          status: EControlStatus.NORMAL,
        },
      },
    ]);
  };

  return (
    <MbInputAccount
      maxAmount={25}
      inputList={inputList}
      removeInputHandler={handleRemoveClick}
      inputChangeHandler={handleInputChange}
      title="Forever Royalties"
      subtitle="Royalties are perpetual and represent 10% of the total sale. You can add up to 25 wallet adresses, including yours."
      smallSubtitle="Select up to 25 accounts"
      footerTitle="Add Split"
      footerAction={handleAddClick}
    />
  );
};

export const AccountPercentage = Template.bind({});
AccountPercentage.args = {};
