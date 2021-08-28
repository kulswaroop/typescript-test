function duplicateCharCount(str: string) {
  if (!str) return;

  if (str) {
    var obj: any = {};
    for (let i = 0; i < str.length; i++) {
      // this condition checks for multiple occurences of character in string and
      // also checks if this entry doesn't already exists in the json object
      if (str.split(str[i]).length > 2 && !obj[str[i]]) {
        obj[str[i]] = str.split(str[i]).length - 1;
      }
    }
    return obj;
  }
}

// const message = "hello world";

// const result = duplicateCharCount(message);
// console.log(result);

module.exports = duplicateCharCount;
