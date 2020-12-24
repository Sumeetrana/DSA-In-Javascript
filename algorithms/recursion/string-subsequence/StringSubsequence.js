function getSubsequence(word) {
  if (word === "") {
    return "";
  }

  const first = word.charAt(0);
  const rest = word.substring(1);

  const prevCall = getSubsequence(rest);

  let result = "";

  prevCall.split(",").forEach((subseq) => {
    result += "," + first + subseq;
    result += "," + subseq;
  });

  return result.substring(1);
}

console.log(getSubsequence("abc"));
