import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style';

const Label = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography 
        className={classes.title} 
        {...props}
      >
        {props.children}
      </Typography>
    </>
  )
}

export default Label;