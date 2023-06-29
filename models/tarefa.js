const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class tarefa extends Model{}
tarefa.init({
    trabalho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    academia: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelname:'tarefa'
    }
    )