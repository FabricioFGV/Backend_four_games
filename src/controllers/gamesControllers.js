import Games from "../models/games.js";
import dbConnection from "../config/db.js";
import { where } from "sequelize";

const createGames = async (req, res) => {
    try {
        console.log("Se ha solicitado la creación de un nuevo juego");
        const {titulo,descripcion,clasificacion,calificacion,imagen,requisitos} = req.body;
        console.log(req.body);
        const newGame = await Games.create({
            titulo,
            descripcion,
            clasificacion,
            calificacion,
            imagen,
            requisitos
        });

        res.status(200).json(`Se ha creado un nuevo juego con el título: ${titulo}`);

    } catch (error) {
        console.error("Error al intentar crear un nuevo juego", error);
        res.status(400).json({
            messageStatus: "Hubo un error al intentar crear un nuevo juego, verificar los datos ingresados de nuevo",
        });
    }
};

const findAllGames = async (req, res) => {
    try {
        console.log("Se ha solicitado la consulta de todos los juegos");
        const allGames = await Games.findAll();
        if (!allGames.length) {
            res.json({
                messageStatus:"No hay juegos registrados"
            })
        }else{
            res.status(200).json(allGames);
        }
    } catch (error) {
        console.error("Error al intentar consultar todos los juegos", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const findGamesByID = async (req, res) => {
    try {
        const gamesID = req.params.gamesID;
        console.log(`Se ha solicitado buscar del juego con el ID: ${gamesID}`);

        const gamesFound = await Games.findByPk(gamesID);

        if (!gamesFound) {
            res.status(404).json({ 
                messageStatus: `No se encontró el juego con ID: ${gamesID}` 
            });
        } else {
            res.status(200).json(gamesFound);
        }
    } catch (error) {
        console.error("Error al intentar buscar el juego por ID", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const updateGamesbyID = async (req, res) => {
    try {
        const gamesID = req.params.gamesID;
        const { 
            titulo,
            descripcion,
            clasificacion,
            calificacion,
            imagen,
            requisitos
        } = req.body;

        const gamesUpdate = await Games.findByPk(gamesID);

        if (!gamesUpdate) {
            return res.status(404).json({ messageStatus: `No se encontró el juego con ID: ${gamesID}` });
        }else{
            await gamesUpdate.update({
                titulo,
                descripcion,
                clasificacion,
                calificacion,
                imagen,
                requisitos
            });
            res.status(200).json(gamesUpdate);
        }
    } catch (error) {
        console.error("Error durante la actualización del juego:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const deleteGames = async (req, res) => {
    try {
        const gamesID = req.params.gamesID;
        console.log(`Se ha solicitado la eliminación del juegos con ID: ${gamesID}`);
        
        const gamesToDelete = await Games.findByPk(gamesID);

        if (!gamesToDelete) {
            return res.status(404).json({ messageStatus: `No se encontró el juegos con ID: ${gamesID}` });
        } else {
            await gamessToDelete.destroy();
            res.status(200).json({ messageStatus: `Se eliminó exitosamente el juegos con ID: ${gamesID}` });
        }
    } catch (error) {
        console.error("Error durante la eliminación del juegos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export {
    createGames,
    findAllGames,
    findGamesByID,
    updateGamesbyID,
    deleteGames
}