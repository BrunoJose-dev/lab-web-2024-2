const produtoModel = require('./produto-model');

// Função para salvar um novo produto no banco de dados
const save = async (produto) => {
  return await produtoModel.Produto.create(produto);
};

// Função para listar produtos com base em filtros (nome e categoria)
const list = async (filters) => {
  const where = {};

  // Filtra por nome, utilizando uma busca parcial
  if (filters.nome) {
    where.nome = { [produtoModel.Sequelize.Op.like]: `%${filters.nome}%` };
  }

  // Filtra por categoria exata
  if (filters.categoria) {
    where.categoria = filters.categoria;
  }

  return await produtoModel.Produto.findAll({ where });
};

// Função para buscar um produto por ID
const findById = async (id) => {
  return await produtoModel.Produto.findOne({ where: { id } });
};

// Função para atualizar um produto existente
const update = async (id, produtoAtualizado) => {
  const [updated] = await produtoModel.Produto.update(produtoAtualizado, { where: { id } });
  if (updated) {
    return await produtoModel.Produto.findOne({ where: { id } });
  }
  return null;
};

// Função para remover um produto do banco de dados
const remove = async (id) => {
  return await produtoModel.Produto.destroy({ where: { id } });
};

module.exports = { save, list, findById, update, remove };
