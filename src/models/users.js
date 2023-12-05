import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Usuarios = dbConnection.define("usuarios", {
    usuario:{
        type:DataTypes.STRING(255)
    },
    correo:{
        type:DataTypes.STRING(255)
    },
    contrasenia:{
        type:DataTypes.STRING(255)
    }
});

export default Usuarios;