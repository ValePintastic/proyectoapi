const {Sequelize, DataTypes} = require ('sequelize')
const {sequelize} = require('../config/db')

const User = sequelize.define('User', {
     id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     nombrecompleto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
     },

     email: {
        type: DataTypes.STRING,
        allowNull: false,
        unnique: true
     },

     celular: {
      type: DataTypes.STRING,
      allowNull: false,
      unnique: true
     },

     cumpleaños: {
      type: DataTypes.STRING,
      allowNull: false,
      unnique: true
     },

     password: {
        type: DataTypes.STRING,
        allowNull:false
        
     },

     date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
     }
    },

{
    timestamps: false


})

module.exports = User;

