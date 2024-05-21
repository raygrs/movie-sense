CREATE DATABASE movieSense;
USE movieSense;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
userName VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
repetirSenha VARCHAR(45)
);

INSERT INTO Usuario VALUES
(DEFAULT, 'ray.grs', 'ray@grs25@gmail.com', '043009ray', '043009ray'),
(DEFAULT, 'anneCruz', 'anne@grs25@gmail.com', '043009ane', '043009ane');


CREATE TABLE Jogo (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
momento DATETIME
);

INSERT INTO Jogo VALUES 
(1, 'quiz', now()),
(2, 'cruzadinha', now());


CREATE TABLE Pontuacao (
idPontuacao INT,
fkUsuario INT,
CONSTRAINT usuarioPontuacao FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
fkJogo INT,
CONSTRAINT jogoPontuacao FOREIGN KEY (fkJogo) REFERENCES Jogo (idJogo),
CONSTRAINT pkComposta PRIMARY KEY (idPontuacao, fkUsuario, fkJogo),
pontos INT,
tempoDemorado TIME
);

INSERT INTO Pontuacao VALUES
(1, 1, 1, 5, '01:10'),
(2, 1, 1, 5, '02:00');

-- exibindo todos os dados 
select * from usuario join pontuacao on usuario.idUsuario = pontuacao.fkUsuario
join jogo on jogo.idJogo = pontuacao.fkJogo;

-- exibir as somas das pontuacao
select sum(pontos) FROM pontuacao;

-- exibir a soma das pontuacoes de forma mais elaborada
SELECT 
    usuario.userName AS User,
    jogo.nome AS Jogo,
    jogo.momento AS Data,
    SUM(pontuacao.pontos) AS Pontuacao,
    SEC_TO_TIME(SUM(TIME_TO_SEC(pontuacao.tempoDemorado))) AS TempoTotal
FROM 
    usuario 
JOIN 
    pontuacao ON usuario.idUsuario = pontuacao.fkUsuario
JOIN 
    jogo ON jogo.idJogo = pontuacao.fkJogo 
GROUP BY 
    usuario.userName, 
    jogo.nome, 
    jogo.momento;
    
-- SELECIONANDO QUANTOS USUARIOS TEM CADASTRADOS
select count(*) AS totalUsuario from Usuario;

-- NO GROUP BY PRECISO AJUNTAS TODOS OS CAMPOS DO SELCT
--  SEC_TO_TIME(SUM(TIME_TO_SEC(pontuacao.tempoDemorado))) precisei usar isso para ele converter para segundos e depois novamente para minutos pois o mysql não suporta 