import React, { useState } from 'react';
import SudokuGrid from '../../Atoms/SudokuGrid/SudokuGrid';
import useStyles from './Style';
import SudokuNumberChoice from '../../Atoms/SudokuNumberChoice/SudokuNumberChoice';
import sudoku from '../../../Static/Js/sudoku';
import { boardToProps, decompose } from './Functions';
import ReactStopwatch from 'react-stopwatch';

var stopWatch = { hours: 0, minutes: 0, seconds: 0 }
var test = <ReactStopwatch
seconds={stopWatch.seconds}
minutes={stopWatch.minutes}
hours={stopWatch.hours}
onChange={({ hours, minutes, seconds }) => {
  stopWatch.hours = hours;
  stopWatch.minutes = minutes;
  stopWatch.seconds = seconds;
}}
onCallback={() => console.log('Finish')}
render={({ formatted }) => {
  return (
    <div>
      <p>
        { formatted }
      </p>
    </div>
  );
}}
/>

const sudokuGenerator = sudoku;
sudokuGenerator.initialize();
var board;
var initialGrid;

const SudokuGame = (props) => {

  if(board === undefined || board === null){
    board = sudokuGenerator.generate("hard");
    initialGrid = boardToProps(board);
  }

  const classes = useStyles();
  const [dataGrid, setDataGrid] = useState(boardToProps(board));
  const [selectedCell, setSelectedCell] = useState(null)

  function updateSelectedCell(gridId, cellId){
    setSelectedCell({ gridId: gridId, cellId: cellId })
  }

  function updateDataGrid(data){
    dataGrid[selectedCell.gridId][selectedCell.cellId] = data;
    setDataGrid(dataGrid);
    updateSelectedCell(selectedCell.gridId, selectedCell.cellId);
  }

  return (
    <>
      <div style={{flexDirection: 'column'}}>
        <div className={classes.gridLineGroupsContainer}>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={0} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={1} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={2} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
            </div>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={3} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={4} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={5} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
            </div>
            <div className={classes.gridLineGroup}>
              <SudokuGrid id={6} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={7} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
              <SudokuGrid id={8} dataGrid={dataGrid} selectedCell={selectedCell} updateCell={updateSelectedCell} initialGrid={initialGrid}/>
            </div>
          </div>
          {selectedCell !== null ? <SudokuNumberChoice eventUpdate={updateDataGrid} /> : <div />}
          {test}
      </div>
    </>
  )
}

export default SudokuGame;