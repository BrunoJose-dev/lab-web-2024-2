const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';  // Versão base da API

const routes = [
  // Rota para listar produtos com filtros opcionais
  {
    method: "GET",
    path: `${baseVersion}/produtos`,
    options: {
      handler: produtoController.getProdutos,
      validate: produtoSchema.consultarProdutos
    }
  },
  // Rota para buscar um produto por ID
  {
    method: "GET",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.produtoPorId,
      validate: produtoSchema.consultaPorId
    }
  },
  // Rota para criar um novo produto
  {
    method: "POST",
    path: `${baseVersion}/produtos`,
    options: {
      handler: produtoController.createProduto,
      validate: produtoSchema.createProduto
    }
  },
  // Rota para atualizar um produto existente
  {
    method: "PUT",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.updateProduto,
      validate: produtoSchema.updateProduto
    }
  },
  // Rota para remover um produto pelo ID
  {
    method: "DELETE",
    path: `${baseVersion}/produtos/{id}`,
    options: {
      handler: produtoController.deleteProduto,
      validate: produtoSchema.consultaPorId
    }
  }
];

module.exports = routes;
