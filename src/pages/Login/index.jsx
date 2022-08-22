import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Box,Card,CardContent,Typography,TextField,
  InputAdornment, IconButton,Button,
  // useMediaQuery,useTheme
} from '@material-ui/core'
import {Visibility,VisibilityOff} from "@material-ui/icons/";
import useStyles from './styles'

const Login = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  
  const [user,setUser] = useState({userName : '' , password : '' });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) =>{
    setUser({...user,[e.target.name] : e.target.value});
  }

  const handleSubmit = () =>{
    console.log(user);
  }
  return (
    <React.Fragment>
      <Box className={classes.box}>
          <Card elevation={6}>
            <CardContent>
              <Typography variant="h3" className={classes.title}>
                Login
              </Typography>

              <TextField name="userName" type="text" label="Your name" onChange={handleChange} variant="outlined" placeholder="Jhon Doe" fullWidth/>
              <TextField name = "password" label='password' variant="outlined" type={showPassword ? "text" : "password"} 
                onChange={handleChange} fullWidth style={{marginTop : '1rem'}}
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button onClick={handleSubmit} variant="contained" color="secondary" 
                fullWidth style={{marginTop:'2rem',marginBottom:'1rem'}}>
                Login
              </Button>

              <Typography variant="body2">
                First time here  <Link to="/auth" style={{color: '#FD3A73'}}>Create Account</Link> 
              </Typography>
            </CardContent>
          </Card>
      </Box>
    </React.Fragment>
  )
}

export default Login;