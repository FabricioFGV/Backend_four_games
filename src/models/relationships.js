import Games from "./games.js";
import Plataformas from "./plataform.js";

Games.belongsTo(Plataformas);
Plataformas.hasMany(Games);

export {Plataformas, Games};