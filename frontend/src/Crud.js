// src/Crud.js
import { useEffect, useState } from "react";

export default function Crud(){
  const [lista,setLista]=useState([]);
  const [nombre,setNombre]=useState("");

  const [crear,setCrear] = useState(false);
  const [nombreNuevo,setNombreNuevo]=useState("");
  const [userNuevo,setUserNuevo]=useState("");
  const [passNuevo,setPassNuevo]=useState("");

  const cargar=async()=>{
    const r=await fetch("http://localhost:3001/data");
    setLista(await r.json());
  }

  const agregar=async()=>{
    await fetch("http://localhost:3001/data",{
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({nombre})
    });
    setNombre(""); cargar();
  }

  const borrar=async(id)=>{
    await fetch("http://localhost:3001/data/"+id,{method:"DELETE"});
    cargar();
  };

  useEffect(()=>{cargar()},[]);

  const crearUsuario=async()=>{
    const r=await fetch("http://localhost:3001/usuarios",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({nombre:nombreNuevo,username:userNuevo,password:passNuevo})
    });
    const data=await r.json();

    if(data.ok){
      alert("Usuario creado");
      setCrear(false);
      setNombreNuevo("");
      setUserNuevo("");
      setPassNuevo("");
    }else{
      alert("Error creando usuario");
    }
  }

  return(
  <div className="feid-bg text-light vh-100 p-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1>CRUD</h1>
      <div>
        <button className="btn btn-success me-2" onClick={()=>setCrear(true)}>Crear usuario</button>
        <button className="btn btn-danger" onClick={()=>window.location.reload()}>Cerrar sesión</button>
      </div>
    </div>

    {crear && (
      <div className="card bg-dark p-3 mb-4">
        <h3>Nuevo Usuario</h3>
        <input className="form-control my-2" placeholder="Nombre" value={nombreNuevo} onChange={e=>setNombreNuevo(e.target.value)} />
        <input className="form-control my-2" placeholder="Usuario" value={userNuevo} onChange={e=>setUserNuevo(e.target.value)} />
        <input className="form-control my-2" placeholder="Contraseña" type="password" value={passNuevo} onChange={e=>setPassNuevo(e.target.value)} />
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={crearUsuario}>Crear</button>
          <button className="btn btn-secondary" onClick={()=>setCrear(false)}>Cancelar</button>
        </div>
      </div>
    )}

    <ul className="list-group">
      {lista.map(x=>
        <li key={x.id} className="list-group-item d-flex justify-content-between align-items-center">
          {x.nombre}
          <button className="btn btn-danger btn-sm" onClick={()=>borrar(x.id)}>x</button>
        </li>
      )}
    </ul>
    </div>
  );
}
