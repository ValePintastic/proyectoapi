const {Sequelize} = require('sequelize');
require('dotenv').config()

/*const sequelize = new Sequelize('retoapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})*/


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions:{
        connectionTimeout: 60000
    }
})

const connectDB = async() =>{
    try{
        await sequelize.authenticate()
        console.log('Connected to database')
    }catch(err){
        console.error('Error connecting to database', err)
    }
}

module.exports = {sequelize,connectDB}