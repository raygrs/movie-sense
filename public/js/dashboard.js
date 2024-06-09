const ctx = document.getElementById('myChartBar');
const labelsQuiz = [];
const dataQuiz = [];
const labelsCruzadinha = [];
const dataCruzadinha = [];

// const mediaPontosChart = document.getElementById('myChartPie');
// new Chart(mediaPontosChart, {
//   type: 'pie',
//   data: {
//     labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
//     datasets: [{
//       label: 'Temperatura',
//       data: [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]],
//       backgroundColor: [
//         '#ff6384',
//         '#36a2eb',
//         '#cc65fe',
//         '#ffce56',
//         '#ff9f40',
//         '#ff6384'
//       ],
//       borderColor: [
//         '#ff6384',
//         '#36a2eb',
//         '#cc65fe',
//         '#ffce56',
//         '#ff9f40',
//         '#ff6384'
//       ],
//       borderWidth: 1
//     }]
//   }
// });

const idUsuario = sessionStorage.ID_USUARIO;

function obterDadosQuiz(idUsuario) {

  fetch(`/aquarios/buscando-pontos-quiz/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        for (let i = 0; i < resposta.length; i++) {
          const partida = resposta[i];
          labelsQuiz.push(partida.idPontuacao);
          dataQuiz.push(partida.pontos);
          }
          grafico.update();
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
            for (let i = 0; i < resposta.length; i++) {
              const partida = resposta[i];
              labelsCruzadinha.push(partida.idPontuacao);
              dataCruzadinha.push(partida.pontos);
        }
        grafico.update();
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}
          
  const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsQuiz,
      datasets: [{
        label: 'Pontuação quiz',
        data: dataQuiz,
        backgroundColor: '#7FA9C7',
        },
      {
        label: 'Pontuação Cruzadinha',
        data: dataCruzadinha,
        backgroundColor: '#000',
      }]
    },
  })

  obterDadosCruzadinha(idUsuario);
  obterDadosQuiz(idUsuario);
