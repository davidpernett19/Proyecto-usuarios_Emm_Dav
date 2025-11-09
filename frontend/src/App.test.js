// src/App.js
import { useState } from "react";
import Login from "./Login";
import CrearUsuario from "./CrearUsuario";
import Crud from "./Crud";

export default function App(){
  const [logueado, setLogueado] = useState(false);
  const [crear, setCrear] = useState(false);

  if (!logueado && !crear) return <Login setLogueado={setLogueado} setCrear={setCrear} />
  if (!logueado && crear) return <CrearUsuario setCrear={setCrear} />
  return <Crud/>
}
