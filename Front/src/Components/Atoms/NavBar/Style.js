import { makeStyles } from '@material-ui/core/styles';
import { brown } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: brown[800]
  },
  appBarRoot: {
    height: "64px"
  },
  googleButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "10px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  barButton: {
    marginLeft: "10px"
  },
  link: {
    textDecoration: "none",
    color: 'inherit',
  },
}));
  
export default useStyles;