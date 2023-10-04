import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const blue=()=>{
    setmode("blue");
    document.body.style.backgroundColor='#007bff';
  }
  const red=()=>{
    setmode("red");
    document.body.style.backgroundColor='red';
  }
  const green=()=>{
    setmode("green");
    document.body.style.backgroundColor='Green';
  }
  const grey=()=>{
    setmode("grey");
    document.body.style.backgroundColor='Grey';
  }
  const yellow=()=>{
    setmode("yellow");
    document.body.style.backgroundColor='yellow';
  }
  const cyan=()=>{
    setmode("cyan");
    document.body.style.backgroundColor='cyan';
  }
  const dark=()=>{
    setmode("dark");
    document.body.style.backgroundColor='black';
  }


  return (
    <>
    <Router>
      <Navbar title="" mode={mode} blue={blue} green={green} red={red} grey={grey} yellow={yellow} cyan={cyan} dark={dark}/>
      <Alert alert={alert}/>
      
      <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm mode={mode} showAlert={showAlert}/>
            </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
