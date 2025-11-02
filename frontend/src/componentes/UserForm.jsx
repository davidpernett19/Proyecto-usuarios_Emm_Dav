import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ usuario, onCancel, modo = "crear" }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (usuario) {
            setNombre(usuario.nombre);
            setEmail(usuario.email);
        } else {
            setNombre('');
            setEmail('');
        }
    }, [usuario]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (modo === "editar" && usuario) {
                await axios.put(`http://localhost:5001/api/usuarios/${usuario.id}`, { nombre, email });
                alert('Usuario actualizado correctamente');
            } else {
                await axios.post('http://localhost:5001/api/usuarios', { nombre, email });
                alert('Usuario agregado correctamente');
            }

            // Limpiar campos después de guardar
            setNombre('');
            setEmail('');
            onCancel();

        } catch (error) {
            console.error('Error al guardar usuario:', error);
            alert('Hubo un error al guardar el usuario');
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>{modo === "editar" ? "Editar usuario" : "Agregar usuario"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div style={{ marginTop: "10px" }}>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div style={{ marginTop: "15px" }}>
                    <button type="submit">
                        {modo === "editar" ? "Guardar cambios" : "Agregar"}
                    </button>

                    {modo === "editar" && (
                        <button
                            type="button"
                            onClick={onCancel}
                            style={{ marginLeft: "10px" }}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default UserForm;
