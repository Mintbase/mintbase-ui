import "material-icons/iconfont/material-icons.css";
import { useEffect, useState } from "react";
import { EIconName } from "../../constants/icons";
import SVG from "react-inlinesvg";

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
        <SVG src={`/${name}.svg`} />
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
