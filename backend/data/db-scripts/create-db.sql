CREATE TABLE IF NOT EXISTS `Aeropuertos` (
  `IdAeropuerto` INTEGER PRIMARY KEY AUTOINCREMENT,
  `Nombre` VARCHAR(100),
  `Ciudad` VARCHAR(100),
  `Pais` VARCHAR(100),
  `CodigoIATA` VARCHAR(3),
  `FechaInauguracion` DATEONLY
);

CREATE TABLE IF NOT EXISTS `Pilotos` (
  `Id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `Nombre` VARCHAR(50),
  `Apellido` VARCHAR(50),
  `FechaNacimiento` DATEONLY,
  `Nacionalidad` VARCHAR(50),
  `IdVuelo` INTEGER
);

CREATE TABLE IF NOT EXISTS `Vuelos` (
     `IdVuelo` INTEGER PRIMARY KEY AUTOINCREMENT,
     `NombreVuelo` VARCHAR(255) NOT NULL, 
     `FechaDespegue` DATEONLY NOT NULL,
     `Precio` DECIMAL(10,2) NOT NULL,
     `IdAvion` INTEGER NOT NULL,
     `IdAeropuertoOrigen` INTEGER NOT NULL,
     `IdAeropuertoDestino` INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS Aviones (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Modelo VARCHAR(255),
    Fecha DATEONLY,
    CapacidadDeCarga INT,
    CapacidadDePasajeros INT,
    Fabricante VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS`Pasajeros` (
    `IdPasajero` INTEGER PRIMARY KEY AUTOINCREMENT,
    `Nombre`VARCHAR(100) NOT NULL,
    `Apellido` VARCHAR(100) NOT NULL,
    `FechaNacimiento` DATE NOT NULL,
    `IdVuelo`INTEGER NOT NULL
);

INSERT INTO Aeropuertos (Nombre, Ciudad, Pais, CodigoIATA, FechaInauguracion) VALUES
  ('Aeropuerto Internacional JFK', 'Nueva York', 'Estados Unidos', 'JFK', '1994-02-12'),
  ('Aeropuerto Internacional Heathrow', 'Londres', 'Reino Unido', 'LHR', '1946-05-31'),
  ('Aeropuerto Internacional de Narita', 'Tokio', 'Japón', 'NRT', '1978-05-20'),
  ('Aeropuerto Internacional de Barajas', 'Madrid', 'España', 'MAD', '1931-04-22'),
  ('Aeropuerto Internacional de Changi', 'Singapur', 'Singapur', 'SIN', '1981-07-01'),
  ('Aeropuerto Internacional de Dubai', 'Dubai', 'Emiratos Árabes Unidos', 'DXB', '1960-09-30'),
  ('Aeropuerto Internacional de Los Ángeles', 'Los Ángeles', 'Estados Unidos', 'LAX', '1930-10-01'),
  ('Aeropuerto Internacional de Tocumen', 'Ciudad de Panamá', 'Panamá', 'PTY', '1947-06-01'),
  ('Aeropuerto Internacional de Sydney', 'Sídney', 'Australia', 'SYD', '1920-01-01'),
  ('Aeropuerto Internacional de Hong Kong', 'Hong Kong', 'China', 'HKG', '1998-07-06'),
  ('Aeropuerto Internacional de OHare', 'Chicago', 'Estados Unidos', 'ORD', '1943-10-20'),
  ('Aeropuerto Internacional de Frankfurt', 'Fráncfort del Meno', 'Alemania', 'FRA', '1936-07-08'),
  ('Aeropuerto Internacional de Sheremétievo', 'Moscú', 'Rusia', 'SVO', '1959-08-11'),
  ('Aeropuerto Internacional de Incheon', 'Seúl', 'Corea del Sur', 'ICN', '2001-03-29'),
  ('Aeropuerto Internacional de Cancún', 'Cancún', 'México', 'CUN', '1975-05-01');

INSERT INTO Pilotos (Nombre, Apellido, FechaNacimiento, Nacionalidad, IdVuelo) VALUES
  ('Juan', 'Pérez', '1990-05-15', 'Argentina', 3),
  ('María', 'Gómez', '1985-09-20', 'España', 4),
  ('Pedro', 'López', '1992-07-10', 'México', 7),
  ('Laura', 'Rodríguez', '1993-03-25', 'Colombia', 2),
  ('Carlos', 'García', '1991-11-05', 'Perú', 1),
  ('Ana', 'Fernández', '1994-02-12', 'Chile', 14),
  ('Luis', 'Martínez', '1988-08-18', 'Brasil', 10),
  ('Sofía', 'Hernández', '1996-01-30', 'Uruguay', 9),
  ('Diego', 'Torres', '1992-06-08', 'Ecuador', 5),
  ('Marta', 'Ramírez', '1995-04-02', 'Bolivia', 12),
  ('Javier', 'González', '1993-10-17', 'Paraguay', 15),
  ('Isabel', 'Díaz', '1990-12-22', 'Costa Rica', 13),
  ('Ricardo', 'Silva', '1987-07-01', 'Panamá', 6),
  ('Paula', 'Ortega', '1994-09-09', 'Venezuela', 11),
  ('Gabriel', 'Cruz', '1991-03-14', 'El Salvador', 8);

INSERT INTO Vuelos (NombreVuelo, FechaDespegue, Precio, IdAvion, IdAeropuertoOrigen, IdAeropuertoDestino) VALUES
  ('Vuelo 1', '2023-06-01', 150.50, 1, 1, 2),
  ('Vuelo 2', '2023-06-02', 200.75, 2, 2, 3),
  ('Vuelo 3', '2023-06-03', 180.00, 3, 3, 4),
  ('Vuelo 4', '2023-06-04', 120.25, 4, 4, 5),
  ('Vuelo 5', '2023-06-05', 250.00, 5, 5, 6),
  ('Vuelo 6', '2023-06-06', 175.50, 6, 6, 7),
  ('Vuelo 7', '2023-06-07', 190.75, 7, 7, 8),
  ('Vuelo 8', '2023-06-08', 135.00, 8, 8, 9),
  ('Vuelo 9', '2023-06-09', 220.25, 9, 9, 10),
  ('Vuelo 10', '2023-06-10', 165.00, 10, 10, 11),
  ('Vuelo 11', '2023-06-11', 185.50, 11, 11, 12),
  ('Vuelo 12', '2023-06-12', 145.75, 12, 12, 13),
  ('Vuelo 13', '2023-06-13', 210.00, 13, 13, 14),
  ('Vuelo 14', '2023-06-14', 155.50, 14, 14, 15),
  ('Vuelo 15', '2023-06-15', 195.75, 15, 15, 16);

INSERT INTO Aviones (Modelo, Fecha, CapacidadDeCarga, CapacidadDePasajeros, Fabricante) VALUES
  ('747', '1968-02-09', 112760, 660, 'Boeing'),
  ('A380', '2005-04-27', 152000, 853, 'Airbus'),
  ('777', '1994-06-12', 103000, 550, 'Boeing'),
  ('A350', '2013-06-14', 68000, 440, 'Airbus'),
  ('787', '2009-12-15', 50200, 440, 'Boeing'),
  ('A330', '1992-11-02', 70000, 440, 'Airbus'),
  ('737', '1967-04-09', 20920, 215, 'Boeing'),
  ('A320', '1987-02-22', 16600, 180, 'Airbus'),
  ('E190', '2004-03-12', 12930, 114, 'Embraer'),
  ('CRJ1000', '2009-09-08', 9072, 104, 'Bombardier'),
  ('ATR72', '1988-10-27', 7500, 78, 'ATR'),
  ('100', '1986-11-30', 12247, 122,'Fokker'),
  ('MD80','1980-10-10',20920 ,172 ,'McDonnell Douglas'),
  ('Superjet100','2011-04-19' ,18500 ,108 ,'Sukhoi Civil Aircraft'),
  ('ARJ21','2016-06-28' ,17000 ,90 ,'Comac');

INSERT INTO Pasajeros (Nombre, Apellido, FechaNacimiento, IdVuelo) VALUES
  ('Juan', 'Lopez', '1990-05-12',5),
  ('Maria', 'Gomez', '1985-08-22', 78),
  ('Pedro', 'Rodriguez', '1993-03-07', 6),
  ('Ana', 'Martinez', '1998-11-15',6),
  ('Carlos', 'Sanchez', '1982-06-29', 12),
  ('Laura', 'Hernandez', '1995-02-18', 11),
  ('Andres', 'Garcia', '1991-09-05', 11),
  ('Sofia', 'Torres', '1989-04-25',9),
  ('Diego', 'Ramirez', '1996-12-10',2),
  ('Valentina', 'Perez', '1994-07-01', 1),
  ('Alejandro', 'Diaz', '1987-01-20', 7),
  ('Camila', 'Vargas', '1992-10-08', 9),
  ('Javier', 'Castro', '1999-06-14', 16),
  ('Isabella', 'Luna', '1988-03-02', 4),
  ('Fernando', 'Ortega', '1997-11-19', 6);
