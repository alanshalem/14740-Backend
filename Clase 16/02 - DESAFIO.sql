DROP DATABASE mibase;

CREATE DATABASE mibase; 

CREATE TABLE mibase.usuarios(nombre VARCHAR(30), apellido VARCHAR(30), edad INT, email VARCHAR(50), id INT PRIMARY KEY NOT NULL AUTO_INCREMENT);

INSERT INTO mibase.usuarios(nombre,apellido,edad,email) VALUES('Juan', 'Perez', 23, 'jp@gmail.com');
INSERT INTO mibase.usuarios(nombre,apellido,edad,email) VALUES('Pedro', 'Mei', 21, 'pm@gmail.com');
INSERT INTO mibase.usuarios(nombre,apellido,edad,email) VALUES('Juana','Suarez',25,'js@gmail.com');

SELECT * FROM mibase.usuarios;

DELETE FROM mibase.usuarios WHERE id = 2;

UPDATE mibase.usuarios SET edad = 24 WHERE id = 1;

SELECT * FROM mibase.usuarios;
