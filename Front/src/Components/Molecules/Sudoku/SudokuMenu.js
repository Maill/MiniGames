import React from 'react';
import { Button } from '@material-ui/core';
import Label from '../../Atoms/Label/Label';
import useStyles from './Style'

const SudokuMenu = (props) => {
  const classes = useStyles();

  return (
    <>
      <Label variant="h4" className={classes.text}>Sudoku</Label>
      <Label variant="h5" className={classes.text}>Choisissez une difficulté :</Label>
      <div className={classes.buttons}>
        <Button variant="contained" color="primary" className={useStyles({color: "green"}).button}>Facile</Button>
        <Button variant="contained" color="primary" className={useStyles({color: "blue"}).button}>Moyen</Button>
        <Button variant="contained" color="primary" className={useStyles({color: "red"}).button}>Difficile</Button>
        <Button variant="contained" color="primary" className={useStyles({color: "black"}).button}>Expert</Button>
        <Button variant="contained" color="primary" className={useStyles({color: "gold"}).button}>Champion</Button>
      </div>
    </>
  )
}

export default SudokuMenu;