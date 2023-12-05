import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Games = dbConnection.define("games", {
    titulo: {
        type: DataTypes.STRING(255),
    },
    descripcion: {
        type: DataTypes.STRING(1000) // Establece el valor predeterminado como la fecha y hora actual
    },
    clasificacion: {
        type: DataTypes.STRING(1000)
    },
    calificacion:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    imagen: {
        type: DataTypes.STRING(25)
    },
    requisitos: {
        type: DataTypes.STRING(1000)
    }

});

export default Games;