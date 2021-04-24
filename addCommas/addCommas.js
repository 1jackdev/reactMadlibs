function addCommas(num) {
  let minusSign = "";
  const numArr = num.toString().split("");
  if (numArr[0] === "-") {
    minusSign = numArr.splice(0, 1);
  }
  const prettyNumArr = [];
  revNumArr = numArr.reverse();
  for (let i = 0; i <= revNumArr.length - 1; i++) {
    if (i !== 0 && i % 3 === 0) {
      prettyNumArr.push(",");
    }
    prettyNumArr.push(revNumArr[i]);
  }

  const prettyNumStr = prettyNumArr.reverse().join("");
  return minusSign + prettyNumStr;
}

module.exports = addCommas;
