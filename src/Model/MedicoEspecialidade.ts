import {sqz} from "../Configure/conn";

const tipos = require('sequelize');
const MedicoEspecialidade = sqz.define('medicoespecialidade', {
    id_medico: {
        type: tipos.INTEGER(11),
        allowNull: false,
        references: {         
          model: 'medicos',
          key: 'id_medico'
        }
      },
        id_especialidade: {
        type: tipos.INTEGER(11),
        allowNull: false,
        references: {         
          model: 'especialidades',
          key: 'id_especialidade'
        }
      }
})
 
module.exports = MedicoEspecialidade;