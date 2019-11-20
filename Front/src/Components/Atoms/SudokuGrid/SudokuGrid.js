import React from 'react';
import { useStyles } from './Style';

const SudokuGrid = ({id, number, dataGrid, updateDataGrid}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cellLineGroup}>
        <div className={classes.cellLine}>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 0, number)}>{dataGrid[id][0]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 1, number)}>{dataGrid[id][1]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 2, number)}>{dataGrid[id][2]}</div>
        </div>
        <div className={classes.cellLine}>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 3, number)}>{dataGrid[id][3]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 4, number)}>{dataGrid[id][4]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 5, number)}>{dataGrid[id][5]}</div>
        </div>
        <div className={classes.cellLine}>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 6, number)}>{dataGrid[id][6]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 7, number)}>{dataGrid[id][7]}</div>
          <div className={classes.cell} onClick={() => updateDataGrid(id, 8, number)}>{dataGrid[id][8]}</div>
        </div>
      </div>
    </>
  )
}

export default SudokuGrid;