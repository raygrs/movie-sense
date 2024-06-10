var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/buscando-pontos-quiz/:idUsuario", function (req, res) {
  aquarioController.buscarPontosDoQuiz(req, res);
});

router.get("/buscando-pontos-cruzadinha/:idUsuario", function (req, res) {
  aquarioController.buscarPontosDaCruzadinha(req, res);
});

// indicadores da kpi de media de pontos da cruzadinha 
router.get("/buscando-media-pontos-cruzadinha/:idUsuario", function (req, res) {
  aquarioController.buscarMediaPontosDaCruzadinha(req, res);
});

// indicadores da kpi de media de pontos do quiz 
router.get("/buscando-media-pontos-quiz/:idUsuario", function (req, res) {
  aquarioController.buscarMediaPontosDoQuiz(req, res);
});

// pegando o menor tempo realizado 
router.get("/buscando-menor-tempo-realizado/:idUsuario", function (req, res) {
  aquarioController.buscarMenorTempoRealizado(req, res);
});

// pegando o total de pontos
router.get("/buscando-total-pontos/:idUsuario", function (req, res) {
  aquarioController.buscarTotalPontos(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
});

router.post("/publicar-cruzadinha/:idUsuario", function (req, res) {
  aquarioController.publicarCruzadinha(req, res);
});

router.post("/publicar-quiz/:idUsuario", function (req, res) {
  aquarioController.publicarQuiz(req, res);
});

module.exports = router;