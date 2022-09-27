let s = "((";

function checkPartner(open, close) {
  return (
    (open === "(" && close === ")") ||
    (open === "{" && close === "}") ||
    (open === "[" && close === "]")
  );
}

function isOpen(str) {
  return str === "(" || str === "[" || str === "{";
}

function main() {
  if (s.length % 2 !== 0) return false;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) {
      arr.push(s[i]);
    } else {
      if (checkPartner(arr[arr.length - 1], s[i])) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  if (s.length === 0) {
  }
  return true;
}

console.log(main());
