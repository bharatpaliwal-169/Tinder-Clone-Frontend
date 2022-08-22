import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  box :{
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
    minHeight : '100vh',
    // backgroundColor : '#fe3c72',
  },
  title:{
    color : '#FD3A73',
    fontWeight : 'bold',
    marginBottom : '2rem',
    marginTop : '2rem',
  }
}));