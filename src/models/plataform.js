import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Plataformas = dbConnection.define("plataformas",{
    plataforma: {
        type: DataTypes.ENUM("Nintendo Switch","Playstation","Steam","Xbox")
    }
});

export default Plataformas;