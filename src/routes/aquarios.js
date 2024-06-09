var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/buscando-pontos-quiz/:idUsuario", function (req, res) {
  aquarioController.buscarPontosDoQuiz(req, res);
});

router.get("/buscando-pontos-cruzadinha/:idUsuario", function (req, res) {
  aquarioController.buscarPontosDaCruzadinha(req, res);
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