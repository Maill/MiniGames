import React from 'react';
import Typography from '@material-ui/core/Typography';

const Label = (props) => {
  return (
    <>
      <Typography 
        className={props.className} 
        {...props}
      >
        {props.children}
      </Typography>
    </>
  )
}
export default Label;