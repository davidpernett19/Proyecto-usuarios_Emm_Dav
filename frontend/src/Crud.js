// src/Crud.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrearUsuario from "./CrearUsuario";

export default function Crud() {
  const [lista, setLista] = useState([]);
  const [nombre, setNombre] = useState("");
  const [crear, setCrear] = useState(false);
  const navigate = useNavigate(); // 👈 para volver al login

  const cargar = async () => {
    const r = await fetch("http://localhost:3001/data");
    setLista(await r.json());
  };

  const borrar = async (id) => {
    await fetch("http://localhost:3001/data/" + id, { method: "DELETE" });
    cargar();
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="feid-bg text-light vh-100 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>CRUD</h1>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => setCrear(true)}
          >
            Crear usuario
          </button>
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Cerrar sesión
          </button>
        </div>
      </div>

      {crear && <CrearUsuario setCrear={setCrear} />}

      <ul className="list-group">
        {lista.map((x) => (
          <li
            key={x.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {x.nombre}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => borrar(x.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
