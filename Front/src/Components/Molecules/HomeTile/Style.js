import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  imgcontainer: props => ({
    marginTop: '5%',
    marginBottom: '5%',
    display: "flex",
    margin: "auto",
    backgroundImage: `url(${props.data.img})`,
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minHeight: '19vw',
    [theme.breakpoints.down(1200)]: {
      minHeight: '29vw'
    }
  })
}));

export default useStyles;