-- Eliminar la tabla de usuarios si ya existe
DROP TABLE IF EXISTS users;

-- Crear la tabla de usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL
);

-- Insertar datos de ejemplo en la tabla de usuarios
INSERT INTO users (first_name, last_name, email, password, birthday)
VALUES 
  ('Tomás', 'García', 'tomas@gmail.com', '412lk4124lk', '1996-09-26'),
  ('Juan', 'Martínez', 'juan@example.com', 'password123', '1990-05-15'),
  ('María', 'López', 'maria@example.com', 'securepass', '1985-11-30'),
  ('Ana', 'Rodríguez', 'ana@example.com', 'securepassword', '1992-07-10'),
  ('Pedro', 'Sánchez', 'pedro@example.com', '12345678', '1988-03-22'),
  ('Luisa', 'Gómez', 'luisa@example.com', 'password321', '1995-12-18'),
  ('Carlos', 'Fernández', 'carlos@example.com', 'qwerty', '1983-09-05'),
  ('Laura', 'Pérez', 'laura@example.com', 'password123', '1990-04-25'),
  ('Roberto', 'Díaz', 'roberto@example.com', 'p@ssw0rd', '1987-08-15'),
  ('Sofía', 'Hernández', 'sofia@example.com', 's3cur3p@ss', '1993-11-20'),
  ('David', 'Ruiz', 'david@example.com', 'david123', '1984-06-12');

-- Seleccionar todos los usuarios
SELECT * FROM users;
