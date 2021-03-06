import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Avatar} from '@material-ui/core'

const useStyles = makeStyles({
  root:{
    gridRow:2,
    margin:'26px',
  }
})

const MessageInputFields = () => {
  const classes = useStyles()
  return (
    <div className = {classes.root}> 
      <Grid container>
        <Grid item = {true} xs = {1}>
          <Avatar />
        </Grid>
        <Grid item = {true} xs = {10}>入力</Grid>
        <Grid item = {true} xs = {1}>ボタン</Grid>
      </Grid>
     </div>
    )
}

export default MessageInputFields