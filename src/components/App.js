import './App.css';
import SignIn from './SignIn'
import {useState} from 'react'
import Main from './main'
import config from '../config.json'


function App() {
  const [name,setName] = useState("")
  if (config.singnInEnabled &&  name == '') {
    return (
      <div className="App">
        <SignIn setName={setName}/>
      </div>
    );
  } else {
    return (
      <Main name={name}/>
    )
  }
}

export default App;
