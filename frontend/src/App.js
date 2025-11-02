import React from 'react';
import UserList from "./componentes/userList";
import UserForm from './componentes/UserForm';

function App() {
  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;