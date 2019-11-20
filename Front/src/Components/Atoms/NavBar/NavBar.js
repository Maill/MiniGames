//React Imports
import React from 'react';
import { Link } from "react-router-dom";

//Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Label from '../Label/Label';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import GoogleButton from '../Buttons/GoogleButton';

//Custom Imports
import useStyles from './Style'
import { PropsProfilButton, PropsNavBarMenu } from './NavBarComponentConfig'

const NavBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu {...PropsNavBarMenu(anchorEl, menuId, isMenuOpen, handleMenuClose)}>
      <Link to="/profile" className={classes.link}><MenuItem onClick={handleMenuClose}>Profil</MenuItem></Link>
      <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu {...PropsNavBarMenu(anchorEl, menuId, isMenuOpen, handleMenuClose)}/>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" classes={{ colorPrimary: classes.appBar, root: classes.appBarRoot }}>
        <Toolbar>
          <Label variant="h6" noWrap className={classes.title}>
            {props.title}
          </Label>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/" className={classes.link}>
              <IconButton {...PropsProfilButton(menuId, null)}>
                <HomeIcon />
                <p>Accueil</p>
              </IconButton>
            </Link>
            {props.isConnected ?
              <IconButton {...PropsProfilButton(menuId, handleProfileMenuOpen)} className={classes.barButton}>
                <AccountCircle />
                <p>Compte</p>
              </IconButton>
              :
              <div className={classes.googleButton}>
                <GoogleButton />
              </div>
            }         
          </div>
          <div className={classes.sectionMobile}>
            <IconButton {...PropsProfilButton(menuId, null)}>
              <HomeIcon />
              <p>Accueil</p>  
            </IconButton>  
            {props.isConnected ?
              <IconButton {...PropsProfilButton(menuId, handleProfileMenuOpen)} className={classes.barButton}>
                <AccountCircle />
              </IconButton>
              :
              <div className={classes.googleButton}>
                <GoogleButton />
              </div>
            }
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default NavBar;