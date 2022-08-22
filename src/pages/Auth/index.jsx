import React,{ useState} from 'react'
import {Stepper,Step,StepLabel,Paper,Typography,Button,
  Card,CardContent,TextField,Radio,RadioGroup,FormControlLabel,
  Checkbox,InputAdornment, IconButton,useMediaQuery,useTheme} from '@material-ui/core'
import {Visibility,VisibilityOff} from "@material-ui/icons";
import useStyles from './styles'
import Done from './onDone'
const Auth = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const initalState = {
    fullName : '', email : '' , password : '' , dob : 0 , gender : '' ,
    isVerified : false
  };

  const [formData,setFormData] = useState(initalState);
  const [activeStep, setActiveStep] = useState(0);
  const [checked , setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFlag(true);
    // if(activeStep === steps.length -1)handleSubmit();
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
                <TextField name = "fullName" label = "name" type = "text" fullWidth
                  onChange = {handleChange} variant="outlined" placeholder='Eg: Jhon Doe'
                >
                </TextField>
                <Typography variant='caption'>
                  Please use only alphabets and numbers.
                </Typography>
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
                <TextField name = "email" label = "Email address" type = "email"
                  onChange = {handleChange} fullWidth
                  variant="filled" placeholder='Eg: jhonDoe@something.com'
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
                <TextField name = "dob" label = "Birthday" type = "date" onChange = {handleChange} fullWidth variant="outlined" placeholder='01/01/2000'
                  InputLabelProps={{
                    shrink: true,
                  }}

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
                <TextField name = "password" label='password' variant="outlined" type={showPassword ? "text" : "password"} 
                  onChange={handleChange} fullWidth
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
                <Typography variant="h4" className={classes.cardHeadText}>
                  Finish building your account
                </Typography>
                <Typography variant="h5" style={{fontWeight : '600'}}>
                  Please Check your details:
                </Typography>
                <Typography variant='body1' style={{marginTop : '0.5rem'}}>
                  <span style={{fontWeight : '600'}}> Name : </span>  {formData.fullName}, <br />
                  <span style={{fontWeight : '600'}}> Email : </span> {formData.email}, <br />
                  <span style={{fontWeight : '600'}}> Date of Birth : </span>  {formData.dob}, <br />
                  <span style={{fontWeight : '600'}}> Gender : </span> {formData.gender}, <br />
                </Typography>
                <Typography variant='body1' style={{marginTop : '0.5rem'}}>
                  You can go back, change it if you feel ...
                </Typography>

                <Typography variant='body2'>
                  Yes, I verify the details provided
                  <Checkbox  
                    checked={checked}
                    onChange={handleCheck}
                    color = 'secondary'
                  />
                </Typography>
              </CardContent>
            </Card>
          </>
        )
      default: 
        return 'Done!'
    }
  }
  const [flag,setFlag] = useState(true);
  const handleChange = (e) => {
    if(e.target.value === ''|| e.target.value === null) setFlag(true);
    else if(e.target.value) setFlag(false);
    if(checked){
      setFlag(false)
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCheck = (e) =>{
    setFlag(false);
    setChecked(e.target.checked)
  }
  // const handleSubmit = () => {
  //   console.log(formData);
  // }

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
              <Done formData = {formData} />
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>

                <div>
                  <Button variant="contained" color="secondary" 
                    onClick={handleNext} fullWidth disabled={flag} 
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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