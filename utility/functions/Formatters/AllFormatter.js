export const AllFormatter = (str, val) => {
  /* 
    str = string
    val = to select type of formatting
        1 => lower Case
        2 => Upper Case
        3 => Sentence Case
        Any Other => Title Case
*/

  if (!str) {
    return str;
  } else {
    str = str.trim();
    if (val == 1) {
      // Lower Case Formatter
      str = str.toLowerCase();
      return str;
    } else if (val == 2) {
      // Upper Case Formatter
      str = str.toUpperCase();
      return str;
    } else if (val == 3) {
      // Sentence Case
      str = str.toLowerCase();
      str.charAt(0).toUpperCase() + str.slice(1);
      console.log(str);
      return str;
    } else {
      // Title Case Formatter
      str = str?.toLowerCase();
      str = str?.split(" ");

      for (var i = 0; i < str.length; i++) {
        str[i] = str[i]?.charAt(0).toUpperCase() + str[i]?.slice(1);
      }
      str = str?.join(" ");
      return str;
    }
  }
};
