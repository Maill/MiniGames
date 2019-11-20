import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    fontSize: '1.5rem',
    margin: 'auto',
    width: "25%",
    minHeight: '9vh',
    flex: 1,
    marginTop: '15px',
    transition: "all 0.5s ease",
    backgroundColor: props => props.color,
    "&:hover": {
      backgroundColor: props => props.color,
      boxShadow: "0 0 15px black",
    }
  },
  buttons: {
    width: '100%',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

export default useStyles;