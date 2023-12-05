import express from "express";
import dbConnection from "./config/db.js";
import {Plataformas, Games} from "./models/relationships.js"
import Usuarios from "./models/users.js";

const api = new express();
const port = 18061;

api.use(express.json());

try {
    console.log("Status -> Intentando Conectar a la Base de Datos ....");
    dbConnection.authenticate();
    console.log("Status -> Conexión a la Base de Datos es exitosa....");
    console.log("Status -> Sincronizando la base de Datos con los objectos existentes");
    dbConnection.sync();
    console.log("Status -> La base de Datos está lista para realizar operaciones");
} catch (error) {
    console.error("Han ocurrido errores al intentar conectar a la base de datos");
    console.error(error);
}

api.listen(port, () => {
    console.log(`El API ha sido iniciado y se encuentra por el puerto: http://localhost:${port}`);
});