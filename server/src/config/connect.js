const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('chat_app_v2', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    timezone: '+07:00',
    raw: 'true'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connect