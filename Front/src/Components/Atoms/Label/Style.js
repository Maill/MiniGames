import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
  
export default useStyles;