const convert = (s, numRows) => {
  let arr = new Array(numRows).fill('');

  let counter = 0;
  let direction = 'up';
  for (let i = 0; i < s.length; i++) {
    if (counter === numRows - 1) direction = 'down';
    if (counter === 0) direction = 'up';

    arr[counter] += s[i];

    if (numRows > 1) {
      if (direction === 'up') {
        counter++;
      } else {
        counter--;
      }
    }
  }
  return arr.join('');
};
