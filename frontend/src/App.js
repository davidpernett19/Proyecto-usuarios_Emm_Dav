// frontend/src/App.js
import { useState } from "react";
import Login from "./Login";
import Crud from "./Crud";


export default function App(){
  const [logueado,setLogueado]=useState(false);
  return logueado ? <Crud/> : <Login setLogueado={setLogueado}/>;
}
