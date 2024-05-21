function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();


    // let tempo = document.getElementById('relogio');
    // console.log(tempo.innerHTML);

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}
relogio();

let pontos = 0;
let content = document.querySelector('.content')

function validar() {
    let valid = true;
    let inputPalavra = document.getElementById('palavra');

    if (inputPalavra.value === '') {
        let msg = document.querySelector('.error');

        msg.innerHTML = '*preencha o campo';
        valid = false;
    }

    // validando as palavras 
    let msg = inputPalavra.value.toUpperCase();

    switch (true) {

        case (msg === 'O INFILTRADO'):
            protetor_o.innerHTML = 'O'
            infiltrado_i.innerHTML = 'I'
            norbit_n.innerHTML = 'N'
            O_infiltrado_f.innerHTML = 'F'
            intocaveis_i.innerHTML = 'I'
            infiltrado_l.innerHTML = 'L'
            infiltrado_t.innerHTML = 'T'
            infiltrado_r.innerHTML = 'R'
            alvin_a.innerHTML = 'A'
            infiltrado_d.innerHTML = 'D'
            infiltrado_o.innerHTML = 'O'

            pontos += 1
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');

            break

        case (msg === 'O PROTETOR'):
            protetor_o.innerHTML = 'O'
            protetor_p.innerHTML = 'P'
            protetor_r.innerHTML = 'R'
            protetor_O.innerHTML = 'O'
            protetor_t.innerHTML = 'T'
            protetor_e.innerHTML = 'E'
            protetor_T.innerHTML = 'T'
            protetor_oo.innerHTML = 'O'
            protetor_R.innerHTML = 'R'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'LUPIN'):
            lupin_l.innerHTML = 'L'
            lupin_u.innerHTML = 'U'
            lupin_p.innerHTML = 'P'
            lupin_i.innerHTML = 'I'
            lupin_n.innerHTML = 'N'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'DNA DO CRIME'):
            dna_d.innerHTML = 'D'
            dna_n.innerHTML = 'N'
            dna_a.innerHTML = 'A'

            do_d.innerHTML = 'D'
            do_o.innerHTML = 'O'

            crime_c.innerHTML = 'C'
            crime_r.innerHTML = 'R'
            crime_i.innerHTML = 'I'
            crime_m.innerHTML = 'M'
            crime_e.innerHTML = 'E'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'NORBIT'):
            norbit_n.innerHTML = 'N'
            norbit_o.innerHTML = 'O'
            norbit_r.innerHTML = 'R'
            norbit_b.innerHTML = 'B'
            norbit_i.innerHTML = 'I'
            norbit_t.innerHTML = 'T'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'CREPUSCULO'):
            crepusculo_c.innerHTML = 'C'
            crepusculo_r.innerHTML = 'R'
            crepusculo_e.innerHTML = 'E'
            crepusculo_p.innerHTML = 'P'
            crepusculo_u.innerHTML = 'U'
            crepusculo_s.innerHTML = 'S'
            crepusculo_C.innerHTML = 'C'
            crepusculo_U.innerHTML = 'U'
            crepusculo_l.innerHTML = 'L'
            crepusculo_o.innerHTML = 'O'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'JOHN WICK'):
            jhon_j.innerHTML = 'J'
            jhon_h.innerHTML = 'O'
            jhon_o.innerHTML = 'H'
            jhon_n.innerHTML = 'N'

            wick_w.innerHTML = 'W'
            wick_i.innerHTML = 'I'
            wick_c.innerHTML = 'C'
            wick_k.innerHTML = 'K'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'INTOCAVEIS'):
            intocaveis_i.innerHTML = 'I';
            intocaveis_n.innerHTML = 'N';
            intocaveis_t.innerHTML = 'T';
            intocaveis_o.innerHTML = 'O';
            intocaveis_c.innerHTML = 'C';
            intocaveis_a.innerHTML = 'A';
            intocaveis_v.innerHTML = 'V';
            intocaveis_e.innerHTML = 'E';
            intocaveis_ii.innerHTML = 'I';
            intocaveis_s.innerHTML = 'S';

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'BOB ESPONJA'):
            bob_b.innerHTML = 'B'
            bob_o.innerHTML = 'O'
            bob_B.innerHTML = 'B'

            esponja_e.innerHTML = 'E'
            esponja_s.innerHTML = 'S'
            esponja_p.innerHTML = 'P'
            esponja_o.innerHTML = 'O'
            esponja_n.innerHTML = 'N'
            esponja_j.innerHTML = 'J'
            esponja_a.innerHTML = 'A'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'ALVIN E OS ESQUILOS'):

            alvin_a.innerHTML = 'A'
            alvin_l.innerHTML = 'L'
            alvin_v.innerHTML = 'V'
            alvin_i.innerHTML = 'I'
            alvin_n.innerHTML = 'N'

            alvin_e.innerHTML = 'E'

            os_o.innerHTML = 'O'
            os_s.innerHTML = 'S'

            esquilos_e.innerHTML = 'E'
            esquilos_s.innerHTML = 'S'
            esquilos_q.innerHTML = 'Q'
            esquilos_u.innerHTML = 'U'
            esquilos_i.innerHTML = 'I'
            esquilos_l.innerHTML = 'L'
            esquilos_o.innerHTML = 'O'
            esquilos_S.innerHTML = 'S'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'TITANIC'):


            titanic_t.innerHTML = 'T'
            titanic_I.innerHTML = 'I'
            titanic_T.innerHTML = 'T'
            esponja_a.innerHTML = 'A'
            titanic_n.innerHTML = 'N'
            titanic_i.innerHTML = 'I'
            titanic_c.innerHTML = 'C'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        case (msg === 'SWAT'):

            crepusculo_s.innerHTML = 'S'
            wick_w.innerHTML = 'W'
            swat_a.innerHTML = 'A'
            swat_t.innerHTML = 'T'

            pontos += 1;
            content.classList.remove('error-Border');
            content.classList.add('correct-Border');
            break

        default:
            pontos -= 1;
            content.classList.add('error-Border');
    }

    if (pontos <= 12) {
        let ptns = document.querySelector('.pnts');
        ptns.innerHTML = `Pontos: ${pontos}`;
    }
}

function submit() {
    if (pontos === 12) {
        alert(`Parabéns você completou a cruzadinha corretamente`);
        
    } else {
        alert('palavras cruzadas incompleta')
        content.classList.add('error-Border');
    }
}

function dicas() {
    var selectDicas = document.getElementById('dicas');
    var divDica = document.getElementById('styleDicas');
    var dica_atual = document.getElementById('Lista_dicas');

    var exibir = document.querySelector('.exibir');

    var lista_dicas = [
        `1- é um homem misterioso que trabalha para uma <BR> empresa de carros-fortes e movimenta grandes quantias de dinheiro pela<BR> cidade de Los Angeles. Quando, ao impedir um assalto, ele surpreende a todos com suas habilidades de combate, suas verdadeiras intenções começam a ser questionadas e um plano maior é revelado.`,
        "2- O ex-agente secreto Robert McCall acredita que seu passado ficou para trás e tenta viver uma nova vida. Ele conhece Alina, uma jovem que está sob poder de uma quadrilha russa, e simplesmente não consegue ignorá-la. Munido de suas extraordinárias habilidades, ele ressurge como um verdadeiro anjo vingador.",
        "3-  O ladrão gentil Assane Diop quer se vingar de uma família rica por uma injustiça cometida contra o pai dele.",
        "4- Inspirada em fatos reais, a série brasileira conta a história do maior assalto da história do Paraguai, que resultou em um rombo financeiro de quase R$ 60 milhões",
        "5- Daniel 'Hondo' Harrelson, é designado para liderar uma unidade do Esquadrão de Armas e Táticas Especiais na comunidade onde cresceu. Secretamente, ele fica dividido entre lealdade às ruas e aos seus irmãos de campo..",
        "6- Desde que foi abandonado em um orfanato, sempre teve uma vida muito dura. Agora, casado com Rasputia, sua vida é ainda pior. Mas tudo muda quando sua antiga namorada volta à cidade..",
        "7- Scott se torna o único e verdadeiro...",
        "8- Stiles é conhecido pelo seu... ",
        "9- Quem foi o primeiro amor de scott",
        "10- Quem foi o primeiro amor de scott",
        "11- Quem foi o primeiro amor de scott",
        "12- Uma caracteristica desse poder é o seus olhos azuis"
    ];

    var valor_atual = parseInt(selectDicas.value);

    if (valor_atual >= 1 && valor_atual <= lista_dicas.length) {
        // Exibe a dica correspondente
        exibir.innerHTML = lista_dicas[valor_atual - 1];
        divDica.style.display = 'block';

    } else {
        exibir.innerHTML = '';
        divDica.style.display = 'none';
    }

}



