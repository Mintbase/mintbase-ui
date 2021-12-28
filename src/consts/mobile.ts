import tailwindConfig from "../../tailwind.config";

export const isMobile = () => {
  return (
    window.innerWidth <
    Number(tailwindConfig.theme.screens.sm.replace("px", ""))
  );
};
