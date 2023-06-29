const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class tipo extends Model{}
tipo.init({
    profissional: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prova: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exercicios: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
sequelize,
modelname:'tipo'
}
)
