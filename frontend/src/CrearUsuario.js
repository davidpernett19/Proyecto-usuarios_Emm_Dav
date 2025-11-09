// src/CrearUsuario.js
import { useState } from "react";

export default function CrearUsuario({ setCrear }) {
  const [user, setUser] = useState("");
  const [email, setEmail]=useState("");
  const [pass, setPass] = useState("");
  const [ok, setOk]=useState(false);

  const crearUsuario = async () => {
    const r = await fetch("http://localhost:3001/crearUsuario",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({user,email,pass})
    });
    const j = await r.json();
    if(j.ok){
      setOk(true)
      setTimeout(()=>setCrear(false),1300)
    }
  }

  return (
    <div className="feid-bg vh-100 d-flex justify-content-center align-items-center">
      <div className="card feid-card p-4" style={{width:"350px"}}>
        <h3 className="text-center mb-4">Crear Usuario</h3>

        {ok && <div className="alert alert-success">Creado con éxito✔</div>}

        <input className="form-control mb-3"
          placeholder="usuario"
          onChange={e=>setUser(e.target.value)}
        />
        <input className="form-control mb-3"
          placeholder="email"
          onChange={e=>setEmail(e.target.value)}
        />
        <input className="form-control mb-3" type="password"
          placeholder="clave"
          onChange={e=>setPass(e.target.value)}
        />
        <button className="btn feid-btn w-100 mb-3" onClick={crearUsuario}>Guardar</button>
        <button className="btn btn-secondary w-100" onClick={()=>setCrear(false)}>Volver</button>
      </div>
    </div>
  )
}
