const produtoBusiness = require("./produto-business");

// Manipulador para listar produtos com base em filtros de nome ou categoria
const getProdutos = async (request, h) => {
  const result = await produtoBusiness.list(request.query);
  return h.response(result).code(200); // Retorna a lista de produtos com código 200 (OK)
};

// Manipulador para buscar um produto por ID
const produtoPorId = async (request, h) => {
  const produto = await produtoBusiness.findById(request.params.id);
  if (produto) {
    return h.response(produto).code(200); // Produto encontrado, retorna 200 (OK)
  }
  return h.response({ error: 'Produto não encontrado' }).code(404); // Produto não encontrado, retorna 404
};

// Manipulador para criar um novo produto
const createProduto = async (request, h) => {
  const result = await produtoBusiness.save(request.payload);
  return h.response(result).code(201); // Produto criado com sucesso, retorna 201 (Created)
};

// Manipulador para atualizar um produto existente
const updateProduto = async (request, h) => {
  const result = await produtoBusiness.update(request.params.id, request.payload);
  if (result) {
    return h.response(result).code(200); // Produto atualizado, retorna 200 (OK)
  }
  return h.response({ error: 'Produto não encontrado para atualização' }).code(404); // Produto não encontrado, retorna 404
};

// Manipulador para remover um produto pelo ID
const deleteProduto = async (request, h) => {
  const result = await produtoBusiness.remove(request.params.id);
  if (result) {
    return h.response().code(204); // Produto removido com sucesso, retorna 204 (No Content)
  }
  return h.response({ error: 'Produto não encontrado para remoção' }).code(404); // Produto não encontrado, retorna 404
};

module.exports = { getProdutos, produtoPorId, createProduto, updateProduto, deleteProduto };
