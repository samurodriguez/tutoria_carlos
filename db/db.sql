CREATE DATABASE IF NOT EXISTS tutoria_carlos;

USE tutoria_carlos;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  password VARCHAR(200)
);

CREATE TABLE entradas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(500),
  id_user INT,
  FOREIGN KEY (id_user) REFERENCES usuarios (id)
);

