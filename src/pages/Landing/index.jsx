import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Box,Button,useMediaQuery,useTheme } from '@material-ui/core'
import useStyles from './styles';
import Navbar from '../../components/NavbarUI'
const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <React.Fragment className="userNone">
      <Navbar></Navbar>
      <Box className={classes.landingBox}>
          <Typography variant={isMobile ? 'h3' : 'h1' } className={classes.title}>
            Start something epic❤️
          </Typography>

          <Typography variant='h1' >
            <Button variant='contained' color='secondary' className={classes.accBtn} >
              Create account
            </Button>
          </Typography>

          <Typography variant='h5' className={classes.mute}>
            Already have an account?  <Link to="/" 
            style={{color: '#f9f9f9'}}>Login</Link>
          </Typography>
      </Box>
    </React.Fragment>
  )
}

export default Landing