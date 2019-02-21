'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phase: {
    type: Sequelize.STRING,
    /**
     * It is possible to solve this using an Enum instead. However, Enums are
     * very often an antipattern. They don't get dropped during a db sync,
     * which causes difficulties when changing the model definition. They
     * cannot be queried e.g. to create a list of options for dropdown menus.
     *
     * Here we use an `isIn` validation, which only addresses the first concern.
     * The ideal would be a separate table of allowed values, which can be
     * queried against – but that's out of scope for this checkpoint.
     */
    validate: {
      isIn: [['junior', 'senior']]
    }
  }
});

Student.findByPhase = function (phase) {
  return this.findAll({
    where: {
      phase
    }
  });
};

module.exports = Student;
