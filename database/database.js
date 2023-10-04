const Sequilize = require("sequelize");
const connection = new Sequilize('blog','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
