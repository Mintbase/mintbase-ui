import React from "react";
import { useState } from "react";
import { MbAction } from "../../..";
import { EIconName } from "../../../consts/icons";
import { ESize, EState } from "../../../consts/properties";
import { MbAccordion } from "../../accordion/Accordion";
import { MbIcon } from "../../icon/Icon";
import { MbInput, EControlStatus } from "../input-field/inputField";

const MbAccountSelector = ({ maxAmount }: { maxAmount: number }) => {
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
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    if (checkIfMax()) return;
    setInputList([...inputList, { placeholder: "mintbase.near", value: "" }]);
  };

  const checkIfMax = () => {
    return inputList.length + 1 === maxAmount;
  };

  return (
    <MbAccordion title="Accounts" hasInfoIcon>
      <section>
        <header>
          <p className="p-big-90 text-gray-700 dark:text-gray-300 mb-16">
            Add accounts to easily switch between.
          </p>
          <p className="dark:text-white p-med-90 mb-8">
            Add up to {maxAmount} accounts
          </p>
        </header>

        <body className="mb-24 max-h-64 p-8 overflow-scroll">
          {inputList.length > 0 &&
            inputList.map((input, index) => {
              return (
                <div key={index} className="flex items-center space-x-12 mb-12">
                  <MbInput
                    type="text"
                    placeholder={input.placeholder}
                    value={input.value}
                    inputSize={ESize.BIG}
                    controlStatus={EControlStatus.NORMAL}
                    onChange={(e: any) => handleInputChange(e, index)}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRemoveClick(index)}
                  >
                    <MbIcon
                      name={EIconName.DELETE}
                      size="24px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              );
            })}
        </body>
        <footer className="text-center">
          <MbAction
            label="Add Another Account"
            state={checkIfMax() ? EState.DISABLED : EState.ACTIVE}
            onClick={handleAddClick}
          />
        </footer>
      </section>
    </MbAccordion>
  );
};

export default MbAccountSelector;
