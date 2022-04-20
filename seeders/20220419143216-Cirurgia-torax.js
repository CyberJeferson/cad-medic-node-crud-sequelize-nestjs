'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('especialidades', [{
      nm_especialidade: 'Cirurgia de tórax',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

   down: (queryInterface, Sequelize) => {    
   queryInterface.bulkDelete('especialidades', null, {});
  }
};
