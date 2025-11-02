import axios from "axios";

const API_URL = "http://localhost:5001/api/usuarios";

export const getUsuarios = () => axios.get(API_URL);
export const getUsuarioById = (id) => axios.get(`${API_URL}/${id}`);
export const crearUsuario = (usuario) => axios.post(API_URL, usuario);
export const actualizarUsuario = (id, usuario) => axios.put(`${API_URL}/${id}`, usuario);
export const eliminarUsuario = (id) => axios.delete(`${API_URL}/${id}`);
