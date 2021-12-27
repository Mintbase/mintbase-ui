import { useState } from "react";
import { EIconName } from "../../constants/icons";
import { ESize } from "../../constants/properties";
import MbAccordion from "../accordion/Accordion";
import MbIcon from "../icon/Icon";
import MbInput, { EControlStatus } from "../input-fields/inputField";

const MbAccountSelectors = () => {
  const [inputList, setInputList] = useState([0]);

  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    console.log(inputList);
    setInputList([...inputList, inputList.length]);
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
            inputList.map((i) => {
              return (
                <div key={i} className="flex items-center space-x-12 mb-12">
                  <MbInput
                    type="text"
                    placeholder="mintbase.near"
                    inputSize={ESize.BIG}
                    controlStatus={EControlStatus.NORMAL}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRemoveClick(i)}
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
