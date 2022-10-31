var isSubsequence = function (s, t) {
  let sCounter = 0;
  let tCounter = 0;

  while (tCounter !== t.length) {
    if (s[sCounter] == t[tCounter]) {
      sCounter++;
    }
    tCounter++;
  }
  return sCounter == s.length && tCounter == t.length;
};
