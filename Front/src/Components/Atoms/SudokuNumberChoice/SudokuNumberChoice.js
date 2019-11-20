import React from 'react'
import useStyles from './Style';

const SudokuNumberChoice = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cellLineGroupsContainer}>
        <div className={classes.cellLineGroup}>
          <div className={classes.cellLine}>
            <div className={classes.cell}>1</div>
            <div className={classes.cell}>2</div>
            <div className={classes.cell}>3</div>
            <div className={classes.cell}>4</div>
            <div className={classes.cell}>5</div>
            <div className={classes.cell}>6</div>
            <div className={classes.cell}>7</div>
            <div className={classes.cell}>8</div>
            <div className={classes.cell}>9</div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SudokuNumberChoice;