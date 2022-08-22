import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    paddingBottom : '3rem',
    paddingTop : '3rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft : '1.5rem',
    },
  },
  backButton: {
    marginTop: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color : '#FD3A73',
    fontWeight : '600',
  },
  authCard :{
    width: '100%',
  },
  cardHeadText : {
    marginBottom : '2rem',
    fontWeight: '600',
    color : '#FD3A73',
  },
}));