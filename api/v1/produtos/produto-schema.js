const Joi = require("joi");

// Validação para criar um produto
const createProduto = {
  payload: Joi.object({
    id: Joi.string().required(),
    nome: Joi.string().min(2).required(),
    descricao: Joi.string().required(),
    categoria: Joi.string().required(),
    marca: Joi.string().required(),
    preco: Joi.number().precision(2).required(),
    quantidadeEstoque: Joi.number().integer().positive().required(),
    codigoBarras: Joi.string().length(13).required(),
    dimensoes: Joi.object({
      altura: Joi.number().positive().required(),
      largura: Joi.number().positive().required(),
      profundidade: Joi.number().positive().required(),
      unidadeMedida: Joi.string().valid('cm').required()
    }).required(),
    peso: Joi.object({
      valor: Joi.number().positive().required(),
      unidadeMedida: Joi.string().valid('kg').required()
    }).required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
    dataCadastro: Joi.date().iso().required()
  })
};

// Validação para atualizar um produto
const updateProduto = {
  payload: Joi.object({
    nome: Joi.string().min(2).optional(),
    descricao: Joi.string().optional(),
    categoria: Joi.string().optional(),
    marca: Joi.string().optional(),
    preco: Joi.number().precision(2).optional(),
    quantidadeEstoque: Joi.number().integer().positive().optional(),
    codigoBarras: Joi.string().length(13).optional(),
    dimensoes: Joi.object({
      altura: Joi.number().positive().optional(),
      largura: Joi.number().positive().optional(),
      profundidade: Joi.number().positive().optional(),
      unidadeMedida: Joi.string().valid('cm').optional()
    }).optional(),
    peso: Joi.object({
      valor: Joi.number().positive().optional(),
      unidadeMedida: Joi.string().valid('kg').optional()
    }).optional(),
    status: Joi.string().valid('ativo', 'inativo').optional(),
    dataCadastro: Joi.date().iso().optional()
  })
};

// Validação para buscar produto por ID
const consultaPorId = {
  params: Joi.object({
    id: Joi.string().required()
  })
};

// Validação para listar produtos com filtros opcionais
const consultarProdutos = {
  query: Joi.object({
    nome: Joi.string().min(3),
    categoria: Joi.string()
  })
};

module.exports = { createProduto, updateProduto, consultaPorId, consultarProdutos };
