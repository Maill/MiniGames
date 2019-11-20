import React from 'react';
import Label from '../../Atoms/Label/Label';
import useStyles from './Style';

const HomeTile = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <Label className={classes.text} variant="h4">{props.data.title}</Label>
      <Label className={classes.text} variant="h6">{props.data.desc}</Label>
      <div className={classes.imgcontainer} />
    </>
  )
}

export default HomeTile;