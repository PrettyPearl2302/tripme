import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('tripme', 'mybesmart', 'bernadette ', {
  host: 'localhost',
  dialect: 'postgres'
});