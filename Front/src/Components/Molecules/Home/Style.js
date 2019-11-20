import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  tiles: {
    marginTop: '50px',
    display: 'flex',
    [theme.breakpoints.down(1200)]: {
      flexDirection: 'column',
      justifyContent: 'center',
    }
  },
  tile: {
    textDecoration: "none",
    flex: 1,
    overflow: "hidden",
    boxShadow: "0 0 15px black",
    margin: "10px",
    transition: "all 0.5s ease",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0 0 5px white",
      transition: "all 0.5s ease",
    },
    "&:active": {
      boxShadow: "0 0 0 black",
      transition: "all 0.15s ease",
    }
  },
}));

export default useStyles;