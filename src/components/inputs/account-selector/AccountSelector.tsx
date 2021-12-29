import React from "react";
import { useState } from "react";
import { MbAction } from "../../..";
import { EIconName } from "../../../consts/icons";
import { ESize, EState } from "../../../consts/properties";
import { MbAccordion } from "../../accordion/Accordion";
import { MbIcon } from "../../icon/Icon";
import { MbInput, EControlStatus } from "../input-field/inputField";

type TInputList = {
  placeholder: string;
  value: string | number;
  status: EControlStatus;
};
interface AccountSelectorProps {
  maxAmount: number;
  title: string;
  subtitle: string;
  smallSubtitle: string;
  inputList: TInputList[];
  footerTitle: string;
  removeInputHandler: (index: number) => void;
  inputChangeHandler: (e: any, index: number) => void;
  footerAction: () => void;
}
const MbAccountSelector = (props: AccountSelectorProps) => {
  const {
    maxAmount,
    title,
    subtitle,
    smallSubtitle,
    inputList,
    footerTitle,
    footerAction,
    removeInputHandler,
    inputChangeHandler,
  } = props;

  return (
    <MbAccordion title={title} hasInfoIcon>
      <main>
        <section className="p-24 h-72 overflow-scroll">
          <header>
            <p className="p-big-90 text-gray-700 dark:text-gray-300 mb-16">
              {subtitle}
            </p>
            <p className="dark:text-white p-med-90 mb-8">{smallSubtitle}</p>
          </header>

          <body>
            {inputList.length > 0 &&
              inputList.map((input, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-12 mb-12"
                  >
                    <MbInput
                      type="text"
                      hasIcon
                      placeholder={input.placeholder}
                      value={input.value}
                      inputSize={ESize.BIG}
                      controlStatus={input.status}
                      onChange={(e: any) => inputChangeHandler(e, index)}
                    />
                    <div
                      className={`${
                        inputList.length > 1
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      }`}
                      onClick={() => removeInputHandler(index)}
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
        </section>
        <footer className="text-center py-32 border-t border-gray-150">
          <MbAction
            label={footerTitle}
            state={
              inputList.length + 1 === maxAmount
                ? EState.DISABLED
                : EState.ACTIVE
            }
            onClick={footerAction}
          />
        </footer>
      </main>
    </MbAccordion>
  );
};

export default MbAccountSelector;
