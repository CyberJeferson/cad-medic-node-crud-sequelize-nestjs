import {sqz} from "../Configure/conn";


const tipos = require('sequelize');
const Medico = sqz.define('medico', {
    id_medico : {
        type: tipos.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    
      },
      nm_medico: {
        type: tipos.STRING(120),
        allowNull: false
      },
      num_crm: {
        type: tipos.INTEGER(8),
        allowNull: false,
        unique: true

        
      },
      num_telfixo: {
        type: tipos.INTEGER(12),
        allowNull: false
      },
      num_celular: {
        type: tipos.INTEGER(12),
        allowNull: false
      },
      num_cep:{
        type: tipos.INTEGER(8),
        allowNull: false,
      },
      nm_rua:{
        type: tipos.STRING(250),
        allowNull: false,
      },
      num_rua:{
        type: tipos.INTEGER(11),
        allowNull: false,
      
      },
      nm_bairro:{
        type: tipos.STRING(120),
        allowNull: false,
      },
      nm_localidade:{
        type: tipos.STRING(120),
        allowNull: false,
      },
      sg_uf:{
        type: tipos.STRING(2),
        allowNull: false
      }

},{
  paranoid: true,
  deletedAt: "soft_delete"

});
 
export = Medico;