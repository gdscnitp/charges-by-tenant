export const TitleCaseFormatter = (str) => {
  if (!str) {
    return str;
  } else {
    str = str?.trim();
    str = str?.toLowerCase();
    str = str?.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i]?.charAt(0).toUpperCase() + str[i]?.slice(1);
    }
    str = str?.join(" ");
    return str;
  }
};
