import React  from "react";
import {makeStyles} from '@material-ui/core/styles'
import { MessageInputFields,MessageList } from "./index";

const useStyles = makeStyles({
  root : {
    display: 'grid',
    height: '100vh',
    gridTemplateRows:'1fr auto'
  }
})

const Main = ({name}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputFields name = {name}/>
    </div>
  )
}

export default Main