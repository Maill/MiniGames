const boardToProps = (board) => {
  const result = []
  for (let i = 0; i < 9; i++) {
    result.push([]);
  }

  var boardPerRows = [];
  var offset = 9
  for(let i = 0; i < 81; i+=9){
    boardPerRows.push(board.slice(i, offset));
    offset += 9;
  }

  for (let i = 0; i < 9 ; i++) {
    for (let j = 0; j < 9 ; j++) {
      result[i][j] = boardPerRows[(i%3*3)+(j-j%3)/3][(j%3)+(i-i%3)]

      if(result[i][j] === '.'){
        result[i][j] = null;
      }
    }
  }

  return result;
}

const decompose = (dataGrid) => {
  const result = []
  for (let i = 0; i < 9; i++) {
    result.push([]);
  }

  for (let i = 0; i < 9 ; i++) {
    for (let j = 0; j < 9 ; j++) {
      result[(i%3*3)+(j-j%3)/3][(j%3)+(i-i%3)] = dataGrid[i][j]
      if(result[(i%3*3)+(j-j%3)/3][(j%3)+(i-i%3)] === null){
        result[(i%3*3)+(j-j%3)/3][(j%3)+(i-i%3)] = '.';
      }
    }
  }

  let stringResult = '';
  for(let i = 0; i < 9; i++){
    stringResult += result[i].join('');
  }

  return stringResult;
}

export { boardToProps, decompose }