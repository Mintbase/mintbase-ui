import tailwindConfig from "../../tailwind.config";

export const isMobile = () => {
  console.log(window.innerWidth);
  console.log(Number(tailwindConfig.theme.screens.sm.replace("px", "")));
  return (
    window.innerWidth <
    Number(tailwindConfig.theme.screens.sm.replace("px", ""))
  );
};
