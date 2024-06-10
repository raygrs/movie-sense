var aquarioModel = require("../models/aquarioModel");

function buscarPontosDoQuiz(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarPontosDoQuiz(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarTotalPontos(req, res){
  var idUsuario = req.params.idUsuario;
  aquarioModel.buscarTotalPontos(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarPontosDaCruzadinha(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarPontosDaCruzadinha(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarMenorTempoRealizado(req, res){
  var idUsuario = req.params.idUsuario;
  aquarioModel.buscarMenorTempoRealizado(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function publicarCruzadinha(req, res) {
  var idUsuario = req.params.idUsuario;
  var pontos = req.body.pontos;
  var tempoDemorado = req.body.tempoDemorado;

  if (pontos == undefined) {
      res.status(400).send("Os pontos estão indefinido!");
  } else if (tempoDemorado == undefined) {
      res.status(400).send("O tempo demorado está indefinido!");
  } else if (idUsuario == undefined) {
      res.status(403).send("O id do usuário está indefinido!");
  } else {
      aquarioModel.publicarCruzadinha(idUsuario, pontos, tempoDemorado)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}

function publicarQuiz(req, res) {
  var idUsuario = req.params.idUsuario;
  var pontos = req.body.pontos;

  if (pontos == undefined) {
      res.status(400).send("Os pontos estão indefinido!");
  }else if (idUsuario == undefined) {
      res.status(403).send("O id do usuário está indefinido!");
  } else {
      aquarioModel.publicarQuiz(idUsuario, pontos)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}

function buscarMediaPontosDoQuiz(req, res){
    var idUsuario = req.params.idUsuario;
    aquarioModel.buscarMediaPontosDoQuiz(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });

}

function buscarMediaPontosDaCruzadinha(req, res){
  var idUsuario = req.params.idUsuario;
  aquarioModel.buscarMediaPontosDaCruzadinha(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });

}

module.exports = {
  buscarPontosDaCruzadinha,
  buscarPontosDoQuiz,
  cadastrar,
  publicarCruzadinha,
  publicarQuiz,
  buscarMediaPontosDoQuiz,
  buscarMediaPontosDaCruzadinha,
  buscarMenorTempoRealizado,
  buscarTotalPontos
}