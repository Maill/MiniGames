import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  gridLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridLineGroup: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  gridLineGroupsContainer: {
      marginTop: '5vh',
      border: "0.05rem solid",
      borderLeft: "0.08rem solid",
      borderRight: "0.08rem solid",
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black'
  },
}));

export default useStyles;