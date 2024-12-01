const server = require("./server");
const { sequelize } = require("././config/db"); // Importa a conexão Sequelize

(async () => {
  try {
    // Sincroniza o banco de dados
    await sequelize.sync({ alter: true }); // Opção segura para atualizar tabelas

    // Inicia o servidor Hapi
    await server.start();
    console.log("Server listening " + server.info.uri);
  } catch (error) {
    console.error("Erro ao iniciar o servidor ou sincronizar banco de dados:", error);
  }
})();
