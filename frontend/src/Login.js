// src/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importar useNavigate

export default function Login({ setLogueado }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // ✅ Hook para navegar

  const entrar = async () => {
    const r = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass })
    });
    const j = await r.json();
    if (j.ok) setLogueado(true);
    else setError(true);
  };

  return (
    <div className="feid-bg vh-100 d-flex justify-content-center align-items-center">
      <div className="card feid-card p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>

        {error && <div className="alert alert-danger">Datos incorrectos</div>}

        <input
          className="form-control mb-3"
          placeholder="usuario"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="clave"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="btn feid-btn w-100 mb-3" onClick={entrar}>
          Entrar
        </button>

        {/* ✅ Aquí el cambio importante */}
        <button
          className="btn btn-secondary w-100"
          onClick={() => navigate("/crear")}
        >
          Crear Usuario
        </button>
      </div>
    </div>
  );
}
