const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('retoapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
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