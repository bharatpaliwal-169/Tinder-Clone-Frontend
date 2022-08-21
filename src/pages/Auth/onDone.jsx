import React from 'react'
import {Typography} from '@material-ui/core'
import useStyles from './styles'
const onDone = () =>{
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.instructions}
        style={{marginTop: '2rem',marginBottom: '2rem'}}
      >
        Yay!! , you are all set.
      </Typography>
    </>
  )
}

export default onDone;