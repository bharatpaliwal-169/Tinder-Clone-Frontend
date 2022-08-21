import React,{ useState} from 'react'
import {Stepper,Step,StepLabel,Paper,Typography,Button,
  Card,CardContent,TextField,Radio,RadioGroup,FormControlLabel,
  InputAdornment, IconButton,useMediaQuery,useTheme} from '@material-ui/core'
import {Visibility,VisibilityOff} from "@material-ui/icons/";
import useStyles from './styles'
import Done from './onDone'
const Auth = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const initalState = {
    fullName : '', email : '' , password : '' , dob : 0 , gender : '' ,
    isVerified : false
  }


  const [formData,setFormData] = useState(initalState);
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getSteps(){
    return [
      'Name',
      'Email address',
      'Birthday',
      'Your Gender',
      'Password',
      'Done!!'
    ];
  }

  const getStepContent = (idx) =>{
    switch (idx) {
      case 0: 
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h4" className={classes.cardHeadText}>
                  Hi, What's your name?
                </Typography>
                <TextField
                  name = "fullName"
                  label = "name"
                  type = "text"
                  required
                  onChange = {handleChange}
                  fullWidth
                  variant="outlined"
                  placeholder='Eg: Jhon Doe'
                >
                </TextField>
              </CardContent>
            </Card>
          </>
        );
      case 1: 
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h4" className={classes.cardHeadText}>
                  Email address
                </Typography>
                <TextField
                  name = "email"
                  label = "Email address"
                  type = "email"
                  required
                  onChange = {handleChange}
                  fullWidth
                  variant="filled"
                  placeholder='Eg: jhonDoe@something.com'
                >
                </TextField>
                <Typography variant='caption'>
                  We want to say connected with you <span> ❤️</span> 
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      case 2:
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h4" className={classes.cardHeadText}>
                  When is your birthday?
                </Typography>
                <TextField
                  name = "dob"
                  label = "Birthday"
                  type = "date"
                  required
                  onChange = {handleChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  placeholder='01/01/2000'
                >
                </TextField>
                <Typography variant='caption' style={{marginTop : '1rem'}}>
                  This will help us find best match/connection/buddy for you.
                </Typography>
              </CardContent>
            </Card>
          </>
        )
      case 3: 
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h4" className={classes.cardHeadText}>
                  What is your Gender?
                </Typography>
                <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </CardContent>
            </Card>
          </>
        )
      case 4:
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h4" className={classes.cardHeadText}>
                  Make a secure Password
                </Typography>
                <TextField
                  name = "password"
                  label='password'
                  variant="outlined"
                  type={showPassword ? "text" : "password"} 
                  onChange={handleChange}
                  fullWidth
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
                <Typography variant='caption' style={{marginTop : '1rem'}}>
                  It helps to keep your personal data safe.
                </Typography>
              </CardContent>
            </Card>
          </>
        )
      case 5:
        return (
          <>
            <Card elevation={0} className={classes.authCard}>
              <CardContent>
                <Typography variant="h5" className={classes.cardHeadText}>
                  Finish making your account
                </Typography>
                <Typography variant='caption' style={{marginTop : '1rem'}}>
                  It helps to keep your personal data safe.
                </Typography>
              </CardContent>
            </Card>
          </>
        )
      default: 
        return 'Done!'
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={0}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>


        <Card elevation={5}>
          <CardContent>
            {activeStep === steps.length ? (
              <Done />
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>

                <div>
                  <Button variant="contained" color="secondary" onClick={handleNext} fullWidth>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    {activeStep === steps.length -1 ? handleSubmit() : null}
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton} fullWidth
                  >
                    Back
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Paper>
    </React.Fragment>
  )
}

export default Auth;