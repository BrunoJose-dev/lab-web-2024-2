const Sequelize = require('sequelize');
const { sequelize } = require('../../../config/database');

// Definição do modelo Produto
const Produto = sequelize.define('Produto', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: Sequelize.TEXT,
  categoria: Sequelize.STRING,
  marca: Sequelize.STRING,
  preco: Sequelize.FLOAT,
  quantidadeEstoque: Sequelize.INTEGER,
  codigoBarras: Sequelize.STRING,
  dimensoes: Sequelize.JSON,  // Dimensões em JSON (altura, largura, profundidade)
  peso: Sequelize.JSON,       // Peso em JSON (valor e unidade)
  status: Sequelize.STRING,
  dataCadastro: Sequelize.DATE,
}, {
  tableName: 'produto',   // Nome da tabela no banco de dados
  timestamps: false       // Desabilita os campos automáticos createdAt e updatedAt
});

module.exports = { Produto, Sequelize };
