import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
  },
  cell: {
    backgroundColor: 'gainsboro',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '4vh',
    minWidth: '6vh',
    minHeight: '6vh',
    flex: 1,
    border: "0.01rem solid",
    borderBlockColor: 'black',
    "&:hover": {
      borderColor: "blue",
    },
    "&:active": {
      borderColor: "blue",
    }
  },
  cellSelected: {
    backgroundColor: 'gainsboro',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '4vh',
    minWidth: '6vh',
    minHeight: '6vh',
    flex: 1,
    border: "0.01rem solid",
    borderColor: 'red'
  },
  cellLocked: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    fontSize: '4vh',
    minWidth: '6vh',
    minHeight: '6vh',
    flex: 1,
    border: "0.01rem solid",
    borderColor: 'black'
  },
  cellLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  cellLineGroup: {
    display: 'flex',
    border: "0.05rem solid",
    flexDirection: 'column',
  },
  cellLineGroupsContainer: {
    marginTop: '5vh',
    width: '100%',
    display: 'flex',
    margin: 'auto',
  },
}));

export { useStyles };