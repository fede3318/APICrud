import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.controller.js";

const router = Router();

// Rutas para obtener todos los usuarios y para obtener un usuario por su ID
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

// Rutas para crear, actualizar y eliminar usuarios
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
