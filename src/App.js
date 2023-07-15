import React, { useState } from 'react';
import UserForm from "./Components/UserForm";
// import Results from "./Components/Results";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
    // valfirstName: true,
    // vallastName: true,
    // valemail: true,
    // valpassword: true,
    // valpassword2: true,
  });

  // console.log("state:" + state.firstName)

  return (
    // <div className="App" >
    <div className="container" >
      <UserForm datosInp={state} seteaInp={setState} />
      {/* <Results datosRes={state} /> */}
    </div >
  );
}

export default App;
