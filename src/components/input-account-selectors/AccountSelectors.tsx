import { useState } from "react";
import { EIconName } from "../../constants/icons";
import { ESize } from "../../constants/properties";
import MbAccordion from "../accordion/Accordion";
import MbIcon from "../icon/Icon";
import MbInput, { EControlStatus } from "../input-fields/inputField";

const MbAccountSelectors = () => {
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
    setInputList([...inputList, { placeholder: "mintbase.near", value: "" }]);
  };

  return (
    <MbAccordion title="Accounts" hasInfoIcon>
      <section>
        <header>
          <p className="p-big-90 text-gray-700 dark:text-gray-300 mb-16">
            Add accounts to easily switch between.
          </p>
          <p className="dark:text-white p-med-90 mb-8">Add up to 20 accounts</p>
        </header>

        <body className="mb-24">
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
          <p
            className="text-blue-300 dark:text-blue-100 p-big-90 cursor-pointer"
            onClick={handleAddClick}
          >
            Add Another Account
          </p>
        </footer>
      </section>
    </MbAccordion>
  );
};

export default MbAccountSelectors;
