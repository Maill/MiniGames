import React from 'react';
import Label from '../../Atoms/Label/Label';
import useStyles from './Style';
import { tictactoe, sudoku, simon } from '../HomeTile/HomeTileData'
import HomeTile from '../HomeTile/HomeTile';
import { Link } from "react-router-dom";

const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      <Label className={classes.title} variant="h3">Bienvenue sur MiniGames</Label>
      <Label className={classes.title} variant="h4">Détendez-vous ! Vous pouurrez vous divertir avec les jeux suivants :</Label>
      <div className={classes.tiles}>
        <Link to="/tictactoe" className={classes.tile}>
          <HomeTile data={tictactoe()} />
        </Link>
        <Link to="/sudoku" className={classes.tile}>
          <HomeTile data={sudoku()} />
        </Link>
        <Link to="/simon" className={classes.tile}>
          <HomeTile data={simon()} />
        </Link>
      </div>
    </>
  )
}

export default Home;