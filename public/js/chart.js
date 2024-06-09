// let temp = []
// let umidade = []

// for (let i = 1; i <= 6; i++) {  
//   temp.push(Math.round(Math.random() * 8));
//   umidade.push(Math.round(Math.random() * (75 - 65) + 65));
// }

// console.log(temp, umidade);

// // usuarios

// const ctxs = document.getElementById('myChartLine');
//   new Chart(ctxs, {
//     type: 'line',
//     data: {
//       labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
//       datasets: [{
//         label: 'Temperatura',
//         data: [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]],
//         borderWidth: 1,
//         backgroundColor: '#ff6384',
//         borderColor: '#ff6384'
//       },
//       ]
//     },
//   });

//   const ctx = document.getElementById('myChartBar');
//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
//       datasets: [{
//         label: 'Umidade Média',
//         data: [umidade[0], umidade[1], umidade[2], umidade[3], umidade[4], umidade[5]],
//         label: 'Umidade',
//         backgroundColor: '#7FA9C7',
//       },
//       {
//         label: 'Umidade Média',
//         data: [100, 200, 300, 400, 500, 600],
//         label: 'Umidade',
//         backgroundColor: '#000',
//       }
//       ]
//     },
//   });

//   const mediaPontosChart = document.getElementById('myChartPie');
//   new Chart(mediaPontosChart, {
//     type: 'pie',
//     data: {
//       labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
//       datasets: [{
//         label: 'Temperatura',
//         data: [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]],
//         backgroundColor: [
//           '#ff6384',
//           '#36a2eb',
//           '#cc65fe',
//           '#ffce56',
//           '#ff9f40',
//           '#ff6384'
//         ],
//         borderColor: [
//           '#ff6384',
//           '#36a2eb',
//           '#cc65fe',
//           '#ffce56',
//           '#ff9f40',
//           '#ff6384'
//         ],
//         borderWidth: 1
//       }]
//     }
//   });

// // const questaoQueMaisErraramChart = document.getElementById('myChartPie2');
// // new Chart(questaoQueMaisErraramChart, {
// //   type: 'pie',
// //   data: {
// //     labels: ['12:00', '13:00', '14:00', '15:00'],
// //     datasets: [{
// //       label: 'Temperatura',
// //       data: [temp[0], temp[1], temp[2], temp[3]],
// //       backgroundColor: [
// //         '#ff6384',
// //         '#36a2eb',
// //         '#cc65fe'
// //       ],
// //       borderColor: [
// //         '#ff6384',
// //         '#36a2eb',
// //         '#cc65fe'
// //       ],
// //       borderWidth: 1
// //     }]
// //   }
// // });


