import {sqz} from "../Configure/conn";

const tipos = require('sequelize');
const Especialidade = sqz.define('especialidade', {
    id_especialidade  : {
        type: tipos.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nm_especialidade  : {
        type: tipos.STRING(120),        
        allowNull: false
      
      }
})
 
export = Especialidade;