const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class usuario extends Model{}
usuario.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelname:'tipo'
    }
    )