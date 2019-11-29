import React from 'react'
import useStyles from './Style';

const SudokuNumberChoice = ({eventUpdate}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cellLineGroupsContainer}>
        <div className={classes.cellLineGroup}>
          <div className={classes.cellLine}>
            <div className={classes.cell} onClick={() => eventUpdate(1)}>1</div>
            <div className={classes.cell} onClick={() => eventUpdate(2)}>2</div>
            <div className={classes.cell} onClick={() => eventUpdate(3)}>3</div>
            <div className={classes.cell} onClick={() => eventUpdate(4)}>4</div>
            <div className={classes.cell} onClick={() => eventUpdate(5)}>5</div>
            <div className={classes.cell} onClick={() => eventUpdate(6)}>6</div>
            <div className={classes.cell} onClick={() => eventUpdate(7)}>7</div>
            <div className={classes.cell} onClick={() => eventUpdate(8)}>8</div>
            <div className={classes.cell} onClick={() => eventUpdate(9)}>9</div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SudokuNumberChoice;