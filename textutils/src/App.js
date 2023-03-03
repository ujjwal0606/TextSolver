
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from'./components/TextForm';
import About from './components/About'
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not 
  const [alert, setAlert] = useState(null); //whether dark mode is enable or not  // 13

  const showAlert =(message, type)=>{    //13
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#055160';
      showAlert('dark mode has be enabled',"success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has be enabled',"success")
    }
  }
  return (
    <Router>
  {/* <Navbar title="TextUtils " aboutText= "Home"/> */}
  {/* <Navbar/> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
    <TextForm showAlert={showAlert} heading="Enter the text to analyzen below" mode={mode}/>
          </Route>
        </Switch>
  </div>
    


   </Router>
  )
}


export default App;
