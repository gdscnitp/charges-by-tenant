export const SentenceCaseFormatter = (str) => {
  if (!str) {
    return str;
  } else {
    str = str.trim();
    str = str.toLowerCase();
    str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str);
    return str;
  }
};
