const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL 
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.Db_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;    