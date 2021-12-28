import React, { useEffect, useState } from "react";
import InlineSVG from "react-inlinesvg";
import { EIconName } from "../../consts/icons";

const mintbaseIcons = [
  "facebook",
  "instagram",
  "pinterest",
  "twitter",
  "telegram",
  "medium",
  "linkedin",
  "youtube",
  "mintbase",
];

export const MbIcon = ({
  name,
  color = "mb-blackblue",
  darkColor,
  size = "24px",
}: {
  name: EIconName;
  color: string;
  darkColor?: string;
  size?: string;
}) => {
  const [isMintbaseIcon, setIsMintbaseIcon] = useState<boolean>(false);

  useEffect(() => {
    checkIfMaterialIcon();
  }, []);

  const checkIfMaterialIcon = () => {
    setIsMintbaseIcon(mintbaseIcons.includes(name));
  };

  return (
    <>
      {isMintbaseIcon ? (
        <InlineSVG
          src={`/assets/icons/${name}.svg`}
          width={size}
          height={size}
          className={`fill-current text-${color} dark:text-${darkColor}`}
        />
      ) : (
        <span
          className={`material-icons text-${color} dark:text-${darkColor}`}
          style={{ fontSize: size }}
        >
          {name}
        </span>
      )}
    </>
  );
};
