import React from 'react';
import { useStyles } from './Style';

const SudokuGrid = ({id, dataGrid, selectedCell, updateCell, initialGrid}) => {
  const classes = useStyles();

  const getCssClass = (cellNumber) => {
    let uiClass = classes.cell;

    if(selectedCell !== null && selectedCell.gridId === id && selectedCell.cellId === cellNumber){
      uiClass = classes.cellSelected;
    }

    if(initialGrid[id][cellNumber] !== null){
      uiClass = classes.cellLocked;
    }

    return uiClass;
  }

  const handleClick = (cellNumber) => {
    if(initialGrid[id][cellNumber] === null){
      updateCell(id, cellNumber);
    }
  }

  return (
    <>
      <div className={classes.cellLineGroup}>
        <div className={classes.cellLine}>
          <div className={getCssClass(0)} onClick={() => handleClick(0)}>{dataGrid[id][0]}</div>
          <div className={getCssClass(1)} onClick={() => handleClick(1)}>{dataGrid[id][1]}</div>
          <div className={getCssClass(2)} onClick={() => handleClick(2)}>{dataGrid[id][2]}</div>
        </div>
        <div className={classes.cellLine}>
          <div className={getCssClass(3)} onClick={() => handleClick(3)}>{dataGrid[id][3]}</div>
          <div className={getCssClass(4)} onClick={() => handleClick(4)}>{dataGrid[id][4]}</div>
          <div className={getCssClass(5)} onClick={() => handleClick(5)}>{dataGrid[id][5]}</div>
        </div>
        <div className={classes.cellLine}>
          <div className={getCssClass(6)} onClick={() => handleClick(6)}>{dataGrid[id][6]}</div>
          <div className={getCssClass(7)} onClick={() => handleClick(7)}>{dataGrid[id][7]}</div>
          <div className={getCssClass(8)} onClick={() => handleClick(8)}>{dataGrid[id][8]}</div>
        </div>
      </div>
    </>
  )
}

export default SudokuGrid;