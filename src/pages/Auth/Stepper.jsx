import React,{ useState} from 'react'
import {Stepper,Step,StepLabel,Typography,Button,
  useMediaQuery,useTheme} from '@material-ui/core'
import useStyles from './styles'
const StepperUI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getSteps = () => {
    return [
      'Name',
      'Email address and Mobile Number',
      'Birthday',
      'Your Gender',
      'You are all set'
    ];
  }

  const getStepContent = (idx) =>{
    switch (idx) {
      case 0: 
        return 'What is your name?';
      case 1: 
        return 'Please mention your email address & Mobile Number.';
      case 2:
        return 'What is your birthday'
      case 3: 
        return 'Which gender group you belong to?'
      default: 
        return 'Done!'
    }
  }



  return (
    <React.Fragment>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <section>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h3" className={classes.instructions}>
                YaY!! , you are all set.
              </Typography>
              <Typography variant="body2">
                Hang On!!
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>

              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </section>

      </div>
    </React.Fragment>
  )
}

export default StepperUI;