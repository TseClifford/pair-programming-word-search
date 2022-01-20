const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  const reverseHorizontalJoin = reverse(letters).map(ls => ls.join(''));
  for (let l of reverseHorizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let row = matrix[0].length;
  let newMatrix = [];
  
  for (let i = 0; i < row; i++) {
    newMatrix[i] = [];
  }
  
  for (let x in matrix) {
    for (let y in matrix[x]) {
      newMatrix[y][x] = (matrix[x][y]);
    }
  }
  return newMatrix;
};

const reverse = function(matrix) {
  let row = matrix.length;
  let newMatrix = [];
  
  for (let i = 0; i < row; i++) {
    newMatrix[i] = [];
  }
  
  for (let x in matrix) {
    for (let j = matrix[x].length - 1; j > 0; j--) {
      newMatrix[x][matrix[x].length - j - 1] = (matrix[x][j]);
    }
  }
  return newMatrix;
};

module.exports = wordSearch;