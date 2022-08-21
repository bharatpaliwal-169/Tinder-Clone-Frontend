import React,{useEffect} from 'react'
import {Box,useMediaQuery,useTheme} from '@material-ui/core'
import useStyles from './styles'
import Flash from '../../assets/images/tinder_logo_white.png'
const FlashUI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => {},2000);
    return () => {clearInterval(timer)}
  })
  return (
    <React.Fragment>
      <Box className={classes.box}>
          <img className={classes.media} src={Flash} alt="Loading" />
      </Box>
    </React.Fragment>
  )
}

export default FlashUI;