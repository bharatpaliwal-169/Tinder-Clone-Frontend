import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media:{
    objectFit : 'cover',
    [theme.breakpoints.down('sm')]: {
      height : '100%',
      width : '100%',
      marginLeft: 0,
      paddingLeft: 0,
      marginTop: '1rem',
      marginBottom : '1rem',
    },
  },
  box :{
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    minHeight : '100vh',
    backgroundColor : '#fe3c72',
  },
}));