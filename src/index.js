import express from "express";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import bodyParser from "body-parser"; 

import { PORT } from "./config.js";

const app = express();

// Middleware 
app.use(morgan("dev"));


app.use(bodyParser.json()); // bodyParser para analizar solicitudes JSON
app.use(bodyParser.urlencoded({ extended: false }));


let users = [];

// GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    users = users.filter(user => user.id !== userId);
    res.sendStatus(204);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    users = users.map(user => {
        if (user.id === userId) {
            return { ...user, ...updatedUser };
        }
        return user;
    });
    res.json(updatedUser);
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
