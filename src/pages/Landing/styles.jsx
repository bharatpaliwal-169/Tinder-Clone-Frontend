import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/images/bg1.jpg';
export default makeStyles((theme) => ({
  landingBox : {
    userSelect : 'none',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    minHeight : '100vh',
    // backgroundColor : '#872121',
    backgroundColor : '#424242',
    // backgroundImage : `url(${Image})`,
    // backgroundRepeat : 'no-repeat',
    // backgroundOrigin : 'center',
    // backgroundSize : 'cover',
    zIndex : '1000',
    // boxShadow: 'inset 3rem 3rem 4rem #3a3737'+
    //             'inset -20px -20px 60px #4e4b4b',
    [theme.breakpoints.down('sm')]: {
      height : '100%',
      width : '100%',
      // backgroundImage : `url(${Image})`,
      backgroundSize : 'cover',

    },
  },
  title:{
    color : '#F1F1F1',
    fontWeight : 'bold',
    letterSpacing : '2px',
    [theme.breakpoints.down('sm')]: {
      padding : '0.5rem',
    },
  },
  accBtn: {
    padding : '1rem',
    paddingLeft : '4rem',
    paddingRight : '4rem',
    borderRadius : '2rem',
    fontSize : '1.5 rem',
    fontWeight : 'bold',
    letterSpacing : '2px',
  },
  mute :{
    color : '#f4f4f4',
  },
}));