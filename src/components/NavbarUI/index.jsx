import React from 'react';
import {Link} from 'react-router-dom'
import {AppBar,Toolbar,CssBaseline,Typography,Box,useMediaQuery,useTheme} from '@material-ui/core'
import useStyles from './styles'
import DrawerComponent from './Drawer'
import Logo from '../../assets/images/color-logo-tinder.png'
const NavbarUI = () =>{
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="transparent" className="userNone">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h3" className={classes.mainLogo}>
              Tinder❤️
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/about" className={classes.link}>
                guidelines
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
              <Link to="/dev" className={classes.link}>
                Dev Connect
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarUI;