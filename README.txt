README – Proyecto CRUD React + MySQL

Participantes:
- David Pernett
- Emmanuel Redondo

Historial de cambios por fechas:


Proyecto de usuarios creado por Emmanuel Redondo y David Pernett >> 23/10/2025

Creacion de los estilos de la pagina, panel de creacion e ingreso de usuario; prueba de creacion de usuarios en MySQL con actualizacion de frontend TR>> 30/10/2025


MODIFICACION DEL PROYECTO DESDE BACKEND:


1. Sábado 1 de noviembre – Creación del backend
   - David Pernett y Emmanuel Redondo
   - Se inicializó el proyecto Node.js con Express
   - Se instalaron dependencias: express, cors, mysql2
   - Se configuró server.js y db.js para la conexión a MySQL

2. Lunes 3 de noviembre – Creación de la base de datos
   - Emmanuel Redondo
   - Se creó la base testdb en MySQL
   - Se crearon tablas:
     - usuarios (id, usuario, email, clave)
     - items (id, nombre)

3. Miércoles 5 de noviembre – Configuración del frontend React
   - David Pernett
   - Se creó el proyecto con create-react-app
   - Se agregaron componentes: Login.js, Crud.js
   - Se integró conexión con el backend para login y CRUD

4. Jueves 6 de noviembre – Estilizado con Bootstrap y tema FEID
   - David Pernett
   - Se instaló Bootstrap en frontend
   - Se creó feid.css con colores verde oscuro #0F3D2E y verde neón #0ADE59
   - Se aplicaron estilos a login, CRUD, inputs y botones

5. Viernes 7 de noviembre – Funcionalidad Crear Usuario y alertas
   - Emmanuel Redondo
   - Se agregó botón “Crear Usuario” en el CRUD
   - Se implementó formulario dinámico para crear usuario y guardarlo en MySQL
   - Se agregaron alertas:
     - verde: usuario creado correctamente
     - rojo: datos incorrectos en login

6. Sábado 8 de noviembre – Mejoras de UX y cierre de sesión
   - David Pernett
   - Se agregó botón “Cerrar sesión” en CRUD
   - Se aplicó efecto neon verde al focus de inputs
   - Se ajustó flujo de login → CRUD → Crear usuario

Resumen de tecnologías:
- Frontend: React, Bootstrap, CSS custom (feid.css)
- Backend: Node.js, Express, MySQL2
- Base de datos: MySQL
- Control de estado: React useState, useEffect
