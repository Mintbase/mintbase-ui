import "material-icons/iconfont/material-icons.css";
import { useEffect, useState } from "react";
import InlineSVG from "react-inlinesvg";
import { EIconName } from "../../constants/icons";

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

const Icon = ({
  name,
  color = "mb-blackblue",
  size = "24px",
}: {
  name: EIconName;
  color: string;
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
          src={`./assets/icons/${name}.svg`}
          width={size}
          height={size}
          className={`fill-current text-${color}`}
        />
      ) : (
        <span
          className={`material-icons text-${color}`}
          style={{ fontSize: size }}
        >
          {name}
        </span>
      )}
    </>
  );
};

export default Icon;
