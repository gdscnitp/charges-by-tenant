export const LowerCaseFormatter = (str) => {
  if (!str) {
    return str;
  } else {
    str = str.trim();
    str = str.toLowerCase();
    return str;
  }
};
