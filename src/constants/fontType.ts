export const getFontType = (size: string) => {
  switch (size) {
    case "big":
      return "big-p";
    case "medium":
      return "med-p";
    case "small":
      return "small-p";
  }
};
