import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import useStyles from './styles'
import ok from '../../assets/svg/ok.svg'
const onDone = ({formData}) =>{
  const classes = useStyles();
  console.log(formData);
  return (
    <>
      <Card elevation={0} className={classes.authCard} style={{marginLeft: '1rem'}}>
        <CardContent>
          <img src={ok} alt="ok" style={{marginLeft: '0.5rem'}} />
          <Typography variant="h4" className={classes.instructions}
            style={{marginTop: '1rem',marginBottom: '1rem'}}
          >
            Yay!! , you are all set.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default onDone;