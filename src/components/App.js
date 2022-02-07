import './App.css';
import SignIn from './SignIn'
import {useState} from 'react'

function App() {
  const [name,setName] = useState("")
  console.log({name})
  return (
    <div className="App">
      <SignIn setName={setName}/>
    </div>
  );
}

export default App;
