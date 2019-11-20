import React, { useState } from 'react';
import SudokuGrid from '../../Atoms/SudokuGrid/SudokuGrid';
import useStyles from './Style';
import SudokuNumberChoice from '../../Atoms/SudokuNumberChoice/SudokuNumberChoice';

const defaultDataGrid = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
]

const SudokuGame = (props) => {
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  const [dataGrid, setDataGrid] = useState(defaultDataGrid);

  function increment(){
    setNumber(number + 1);
  }

  function updateDataGrid(id, cell, data){
    dataGrid[id][cell] = data;
    setDataGrid(dataGrid);
    increment();
  }

  return (
    <>
      <div style={{flexDirection: 'column'}}>
        <div className={classes.gridLineGroupsContainer}>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={0} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={1} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={2} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
            </div>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={3} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={4} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={5} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
            </div>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={6} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={7} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
              <SudokuGrid id={8} number={number} dataGrid={dataGrid} updateDataGrid={updateDataGrid}/>
            </div>
          </div>
          <SudokuNumberChoice />
      </div>
    </>
  )
}

export default SudokuGame;