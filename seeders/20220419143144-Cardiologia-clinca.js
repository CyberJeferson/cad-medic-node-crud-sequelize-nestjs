'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('especialidades', [{
      nm_especialidade: 'Cardiologia clínca',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

   down: (queryInterface, Sequelize)=> {    
  queryInterface.bulkDelete('especialidades', null, {});
  }
};
