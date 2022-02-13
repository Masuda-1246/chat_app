import './App.css';
import SignIn from './SignIn'
import {useState} from 'react'
import Main from './main'

function App() {
  const [name,setName] = useState("")
  console.log({name})
  if (name == '') {
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
