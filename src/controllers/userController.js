import Usuarios from "../models/users.js";
import dbConnection from "../config/db.js";
import { where } from "sequelize";

const createUsers = async (req, res) => {
    try {
        console.log("Se ha solicitado la creación de un nuevo usuario");
        const {usuario, correo, contrasenia} = req.body;
        console.log(req.body);
        const newUser = await Games.create({
            usuario,
            correo,
            contrasenia
        });

        res.status(200).json(`Se ha creado un nuevo usuario con el título: ${usuario}`);

    } catch (error) {
        console.error("Error al intentar crear un nuevo usuario", error);
        res.status(400).json({
            messageStatus: "Hubo un error al intentar crear un nuevo usuario, verificar los datos ingresados de nuevo",
        });
    }
};

const findAllUsers = async (req, res) => {
    try {
        console.log("Se ha solicitado la consulta de todos los usuarios");
        const allUsers = await Usuarios.findAll();
        if (!allUsers.length) {
            res.json({
                messageStatus:"No hay usuarios registrados"
            })
        }else{
            res.status(200).json(allUsers);
        }
    } catch (error) {
        console.error("Error al intentar consultar todos los usuarios", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const findUsersByID = async (req, res) => {
    try {
        const userID = req.params.userID;
        console.log(`Se ha solicitado buscar del usuario con el ID: ${userID}`);

        const userFound = await Usuarios.findByPk(userID);

        if (!userFound) {
            res.status(404).json({ 
                messageStatus: `No se encontró el usuario con ID: ${userID}` 
            });
        } else {
            res.status(200).json(userFound);
        }
    } catch (error) {
        console.error("Error al intentar buscar el usuario por ID", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const updateUsersbyID = async (req, res) => {
    try {
        const userID = req.params.userID;
        const { 
            usuario,
            correo,
            contrasenia
        } = req.body;

        const userUpdate = await Usuarios.findByPk(userID);

        if (!userUpdate) {
            return res.status(404).json({ messageStatus: `No se encontró el usuario con ID: ${userID}` });
        }else{
            await userUpdate.update({
                usuario,
                correo,
                contrasenia
            });
            res.status(200).json(userUpdate);
        }
    } catch (error) {
        console.error("Error durante la actualización del usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const deleteUsers = async (req, res) => {
    try {
        const userID = req.params.userID;
        console.log(`Se ha solicitado la eliminación del usuarios con ID: ${userID}`);
        
        const usersToDelete = await Usuarios.findByPk(userID);

        if (!usersToDelete) {
            return res.status(404).json({ messageStatus: `No se encontró el usuarios con ID: ${userID}` });
        } else {
            await usersToDelete.destroy();
            res.status(200).json({ messageStatus: `Se eliminó exitosamente el usuarios con ID: ${userID}` });
        }
    } catch (error) {
        console.error("Error durante la eliminación del usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export {
    createUsers,
    findAllUsers,
    findUsersByID,
    updateUsersbyID,
    deleteUsers
}