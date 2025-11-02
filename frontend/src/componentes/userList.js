import React, { useEffect, useState } from 'react';
import { getUsuarios, eliminarUsuario } from "../services/usuariosService";
import UserForm from "./UserForm";

function UserList() {
    const [users, setUsers] = useState([]);

    const cargarUsuarios = async () => {
        try {
            const res = await getUsuarios();
            setUsers(res.data);
        } catch (error) {
            console.error("Error al cargar usuarios:", error);
        }

    };
    useEffect(() => {
        cargarUsuarios();
    }, []);

    const borrarUsuario = async (id) => {
        if (window.confirm("¿Seguro que quieres eliminar este usuario?")) {
            try {
                await eliminarUsuario(id);
                cargarUsuarios();
            } catch (error) {
                console.error("Error al eliminar usuario:", error);
            }
        }
    };
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const handleEdit = (usuario) => {
        setUsuarioEditado(usuario);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista de usuarios</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th><th>Nombre</th><th>Email</th><th>Editar</th><th>Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nombre}</td>
                            <td>{u.email}</td>
                            <td>
                                <button onClick={() => handleEdit(u)}>Editar</button>
                            </td>
                            <td>
                                <button onClick={() => borrarUsuario(u.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {usuarioEditado && (
                <UserForm
                    usuario={usuarioEditado}
                    onCancel={() => setUsuarioEditado(null)}
                    modo="editar"
                />
            )}

        </div>
    );
}

export default UserList;