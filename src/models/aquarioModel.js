var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function publicarCruzadinha(idUsuario, pontos, tempoDemorado) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, pontos, tempoDemorado);
  var instrucaoSql = `
    INSERT INTO Pontuacao(fkUsuario, fkJogo, pontos, tempoDemorado, momento) VALUES (${idUsuario}, 1, ${pontos}, "${tempoDemorado}", now())`;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function publicarQuiz(idUsuario, pontos) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, pontos);
  var instrucaoSql = `
    INSERT INTO Pontuacao(fkUsuario, fkJogo, pontos, tempoDemorado, momento) VALUES (${idUsuario}, 2, ${pontos}, null, now())`;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPontosDoQuiz(empresaId) {
  var instrucaoSql = `SELECT idPontuacao, pontos, momento FROM Pontuacao WHERE fkJogo = 1`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPontosDaCruzadinha(empresaId) {
  var instrucaoSql = `SELECT idPontuacao, pontos, tempoDemorado, momento FROM Pontuacao where fkJogo = 2`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarPontosDoQuiz,
  cadastrar,
  publicarCruzadinha,
  publicarQuiz,
  buscarPontosDaCruzadinha
}
