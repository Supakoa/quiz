const checkDuplicateStr = (str = "") => {
  const strSplit = str.split("");
  let count = 0;
  let arr = [];
  for (let i = 0; i < strSplit.length; i++) {
    const cur = strSplit[i];
    const nxt = strSplit[i + 1];
    ++count;
    if (cur !== nxt) {
      arr.push(`${cur}${count > 1 ? count : ""}`);
      count = 0;
    }
  }
  return arr.join("");
};

checkDuplicateStr("qqeasssssssssss");

module.exports = checkDuplicateStr;
