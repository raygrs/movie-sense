const quizChart = document.getElementById('chartQuiz');
const cruzadinhaChart = document.getElementById('chartCruzadinha');
const labelsQuiz = [];
const dataQuiz = [];
const labelsCruzadinha = [];
const dataCruzadinha = [];
const idUsuario = sessionStorage.ID_USUARIO;


function obterDadosQuiz(idUsuario) {

  fetch(`/aquarios/buscando-pontos-quiz/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        for (let i = resposta.length - 1; i >= 0; i--) {
          const partida = resposta[i];
          labelsQuiz.push(partida.momento);
          dataQuiz.push(partida.pontos);
        }
        graficoQuiz.update();
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

}

function obterDadosCruzadinha(idUsuario) {

  fetch(`/aquarios/buscando-pontos-cruzadinha/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        for (let i = resposta.length - 1; i >= 0; i--) {
          const partida = resposta[i];
          labelsCruzadinha.push(partida.momento);
          dataCruzadinha.push(partida.pontos);
        }
        graficoCruzadinha.update();
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function obterMediaQuiz(idUsuario) {

  fetch(`/aquarios/buscando-media-pontos-quiz/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        const mediaPontos = resposta[0].mediaPontos;
        const mediaPontosFormatado = Math.round(mediaPontos);
        mediaPontosQuiz.innerHTML = mediaPontosFormatado;
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function obterMenorTempo(idUsuario) {
  fetch(`/aquarios/buscando-menor-tempo-realizado/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        const menorTempo = resposta[0].tempoDemorado;
        const menorTempoFormatado  = menorTempo.slice(3);
        menorTempoRealizado.innerHTML = menorTempoFormatado;
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
obterMenorTempo(idUsuario);

function obterMediaCruzadinha(idUsuario) {

  fetch(`/aquarios/buscando-media-pontos-cruzadinha/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        const mediaPontos = resposta[0].mediaPontos;
        const mediaPontosFormatado = Math.round(mediaPontos);
        mediaPontosCruzadinha.innerHTML = mediaPontosFormatado;
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function obterTotalPontos (idUsuario) {
  fetch(`/aquarios/buscando-total-pontos/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        const total = resposta[0].pontosTotal;
        totalPontos.innerHTML = total;
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
obterTotalPontos(idUsuario);
obterMediaQuiz(idUsuario);
obterMediaCruzadinha(idUsuario);

const graficoQuiz = new Chart(quizChart, {
  type: 'bar',
  data: {
    labels: labelsQuiz,
    datasets: [{
      label: 'Pontuação quiz',
      data: dataQuiz,
      backgroundColor: 'rgb(23, 125, 131)',
    }]
  },
});

const graficoCruzadinha = new Chart(cruzadinhaChart, {
  type: 'bar',
  data: {
    labels: labelsCruzadinha,
    datasets: [{
      label: 'Pontuação cruzadinha',
      data: dataCruzadinha,
      backgroundColor: 'rgb(23, 125, 131)',
    }]
  },
})

obterDadosCruzadinha(idUsuario);
obterDadosQuiz(idUsuario);
