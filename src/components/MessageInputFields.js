import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root:{
    gridRow:2,
  }
})

const MessageInputFields = () => {
  const classes = useStyles()
  return <div className = {classes.root}> MessageInputFields </div>
}

export default MessageInputFields