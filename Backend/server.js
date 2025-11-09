// backend/server.js
import express from "express";
import cors from "cors";
import { conn } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// LOGIN
app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  conn.query(
    "SELECT * FROM usuarios WHERE usuario=? AND clave=?",
    [user, pass],
    (err, rows) => {
      if (rows.length > 0) res.json({ ok: true });
      else res.json({ ok: false });
    }
  );
});

// CREAR USUARIO
app.post("/crearUsuario", (req, res) => {
  const { user, email, pass } = req.body;
  conn.query(
    "INSERT INTO usuarios(usuario,email,clave) VALUES(?,?,?)",
    [user, email, pass],
    (err) => {
      if (err) return res.json({ ok:false, error:err });
      res.json({ ok: true });
    }
  );
});

// CRUD ITEMS

app.get("/data", (req, res) => {
  conn.query("SELECT * FROM items", (err, result) => {
    res.json(result);
  });
});

app.post("/data", (req, res) => {
  const { nombre } = req.body;
  conn.query("INSERT INTO items(nombre) VALUES(?)", [nombre], () => {
    res.json({ ok: true });
  });
});

app.put("/data/:id", (req, res) => {
  const { nombre } = req.body;
  conn.query(
    "UPDATE items SET nombre=? WHERE id=?",
    [nombre, req.params.id],
    () => {
      res.json({ ok: true });
    }
  );
});

app.delete("/data/:id", (req, res) => {
  conn.query("DELETE FROM items WHERE id=?", [req.params.id], () => {
    res.json({ ok: true });
  });
});

app.listen(3001, () => console.log("backend listo en 3001 ✅"));

// crear usuario
app.post("/usuarios", (req,res)=>{
  const { nombre, username, password } = req.body;

  if(!nombre || !username || !password){
    return res.json({ ok:false, msg:"faltan datos" });
  }

  conn.query(
    "INSERT INTO usuarios(nombre,username,password) VALUES(?,?,?)",
    [nombre,username,password],
    (err, result)=>{
      if(err){
        console.log(err);
        return res.json({ ok:false, msg:"error en mysql" });
      }
      res.json({ ok:true });
    }
  );
});

