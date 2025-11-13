// src/CrearUsuario.js
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import necesario

export default function CrearUsuario() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ok, setOk] = useState(false);
  const navigate = useNavigate(); // ✅ Hook de navegación

  const crearUsuario = async () => {
    if (!user || !email || !pass) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const r = await fetch("http://localhost:3001/crearUsuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, email, pass }),
      });

      const j = await r.json();

      if (j.ok) {
        setOk(true);
        setUser("");
        setEmail("");
        setPass("");

        // ✅ Vuelve al login después de 1.3 segundos
        setTimeout(() => navigate("/"), 1300);
      } else {
        alert("Error al crear usuario");
      }
    } catch (err) {
      console.error("Error al crear usuario:", err);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="feid-bg vh-100 d-flex justify-content-center align-items-center">
      <div className="card feid-card p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Crear Usuario</h3>

        {ok && <div className="alert alert-success">Creado con éxito ✔</div>}

        <input
          className="form-control mb-3"
          placeholder="usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="form-control mb-3"
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="clave"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          className="btn feid-btn w-100 mb-3"
          onClick={crearUsuario}
          disabled={ok}
        >
          Guardar
        </button>

        {/* ✅ Vuelve al login sin errores */}
        <button
          className="btn btn-secondary w-100"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
