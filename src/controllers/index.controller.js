import { pool } from "../db.js";

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por su ID
export const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, birthday } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password, birthday) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [first_name, last_name, email, password, birthday]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario existente
export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { first_name, last_name, email, password, birthday } = req.body;
    const { rows } = await pool.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, birthday = $5 WHERE id = $6 RETURNING *",
      [first_name, last_name, email, password, birthday, id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    if (rowCount === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
