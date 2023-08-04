
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextArea from "./components/TextArea";
import React, { useState, useEffect} from 'react';
import Alert from "./components/Alert";
import Accordion from './components/Accordion';
import Cookies from 'js-cookie';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState( 'light'); // to toggle between dark and light modes.

  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if(document.cookie.match('mode')){
      if(Cookies.get('mode')==='dark'){
        toggleMode();
      }
    }
  }, []);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const setThemeCookie = (name, value) => {
    Cookies.set(name, value, { expires: 10 });
  }



  const toggleMode = () => {

    if (mode === 'light') {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.querySelector('.toggle-switch').defaultChecked=true;
      // let tArea = document.getElementById("texrea");
      // tArea.style.color = "white";
      // tArea.style.backgroundColor = "black";

      // let tHead = document.getElementById("textHead");
      // tHead.style.color = "white";

      // showAlert("success", "Dark Mode Enabled !");

      document.title = "textUtils-darkMode";


      setMode('dark');
      setThemeCookie('mode','dark');

    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector('.toggle-switch').defaultChecked=false;
      // let tArea = document.getElementById("texrea");
      // tArea.style.color = "black";
      // tArea.style.backgroundColor = "white";

      // let tHead = document.getElementById("textHead");
      // tHead.style.color = "black";

      // showAlert("success", "Light Mode Enabled !");

      document.title = "textUtils";



      setMode('light');
      setThemeCookie('mode','light');

    }
  }

  return (
    <>



      <Router>

        <Navbar mode={Cookies.get('mode')} toggleMode={toggleMode} />
        <Alert alert={alert} />

         
          <Routes>
            <Route exact path="/About" element={
               <div className="container-fluid">
               <Accordion mode={Cookies.get('mode')}/>
             </div>
            }/>
           
            <Route exact path="/" element={
               <div className="container">
               <TextArea showAlert={showAlert} mode={Cookies.get('mode')}/>
             </div>
            }/>
             
          </Routes>
         



      </Router>




    </>
  );
}

export default App;
