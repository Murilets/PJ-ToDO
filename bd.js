const { Sequelize } = require('sequelize')
const shema = 'app_tarefa'
const sequelize = new Sequelize(
    shema, 'root','',{
        host:'localhost', //caminho: ip ou nome dns
        dialect:'mysql', //banco de dados(SGBD)
        charset:'utf8', //tabela de caracteres
        collate:'utf8_general_ci',//colcação
        timezone:'-3:00'//timezone
    })
    try {
        sequelize.authenticate()//metodo que autentica e cria a conexão
        console.log('Conectado ao banco:'+ shema)
    } catch (erro) {
        console.log('Não foi possivel conectar:', erro)
    }
    module.exports = sequelize