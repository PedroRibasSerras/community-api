-- AQUI SERÃO INSERIDOS OS DADOS DO BANCO

-- 1 - Centro Academico 2 - Secretaria Acadêmica, 3 - Extracurricular

-- ORGANIZAÇÕES

INSERT INTO ORGANIZACAO (ID, NOME, TIPO, EMAIL, SENHA) VALUES (NULL, 'CAASO', 1, 'caaso@usp,br', 'caasinhobr');
INSERT INTO ORGANIZACAO (ID, NOME, TIPO, EMAIL, SENHA) VALUES (NULL, 'SAECOMP', 2, 'saecomp@usp,br', 'perry');
INSERT INTO ORGANIZACAO (ID, NOME, TIPO, EMAIL, SENHA) VALUES (NULL, 'SEMEAR', 3, 'semear@usp,br', 'semeando');

-- EVENTOS

INSERT INTO EVENTO (TITULO, DESCRICAO, LATITUDE, LONGITUDE, ENDERECO, CRIADOR) VALUES ('Luta Jovem', 'Vamos juntos nessa causa justa!!', -22.001537519353068, -47.898084253207905, 'Av. Trab. São Carlense, 400 - Parque Arnold Schimidt, São Carlos - SP, 13566-590', 1);
INSERT INTO EVENTO (TITULO, DESCRICAO, LATITUDE, LONGITUDE,ENDERECO, CRIADOR) VALUES ('Linguiçada do Nava', 'Venha para o melhor churrasco do bairro', -22.002925469364172, -47.896302738126025,'R. dos Inconfidentes, 371 - Parque Arnold Schimidt, São Carlos - SP, 13566-581', 2);
INSERT INTO EVENTO (TITULO, DESCRICAO, LATITUDE, LONGITUDE,  ENDERECO, CRIADOR) VALUES ('Café com a Eng Comp', 'Venha tomar um cafezinho brabo', -22.002326982628787, -47.932289596359986, 'Jardim, Av. João Dagnone, 1100 - Santa Angelina, São Carlos - SP, 13563-120', 2);
INSERT INTO EVENTO (TITULO, DESCRICAO, LATITUDE, LONGITUDE, ENDERECO, CRIADOR) VALUES ('Contruindo Robôs', 'Venha aprender a contruir robôs sensoriais', -22.007564804992704, -47.89819832733643, 'Av. Trab. São Carlense, 400 - Parque Arnold Schimidt, São Carlos - SP, 13564-002', 3);
INSERT INTO EVENTO (TITULO, DESCRICAO, LATITUDE, LONGITUDE, ENDERECO, CRIADOR) VALUES ('Hackaton Eng Comp', 'O maior e melhor hackaton da USP', -22.002244194231714, -47.931072612777854, 'Jardim, Av. João Dagnone, 1100 - Santa Angelina, São Carlos - SP, 13563-120',2);

-- NOTIFICAÇÕES

INSERT INTO NOTIFICACAO (TITULO, DESCRICAO, DATA_NOTIFICACAO, CRIADOR) VALUES ('A busca pela educação', 'Nunca é hora de parar de lutar pela educação livre e de qualidade, venha você também', '2022-02-01 16:00:00',1);
INSERT INTO NOTIFICACAO (TITULO, DESCRICAO, DATA_NOTIFICACAO, CRIADOR) VALUES ('Não esqueçam dos eventos desse mês!!', 'Venham para a linguiçada do Nava e também para o café com a eng comp!', '2022-04-08 12:00:00',2);


-- TIPOS

INSERT INTO TIPO_LOCALIZACAO (NOME, ICONE, COR) VALUES ('Restaurante', NULL, 'FA0202');
INSERT INTO TIPO_LOCALIZACAO (NOME, ICONE, COR) VALUES ('Instituto', NULL, '3C1BE3');
INSERT INTO TIPO_LOCALIZACAO (NOME, ICONE, COR) VALUES ('Ponto Estrégico', NULL, '03FC4B');
INSERT INTO TIPO_LOCALIZACAO (NOME, ICONE, COR) VALUES ('Portão', NULL, '6B0751');
INSERT INTO TIPO_LOCALIZACAO (NOME, ICONE, COR) VALUES ('Zona comum', NULL, 'FC3F03');

-- LOCALIZAÇÕES

INSERT INTO LOCALIZACAO (NOME, DESCRICAO, TIPO, LATITUDE, LONGITUDE) VALUES ('Estação Trem Bão', 'O melhor lanche da região você encontra somente aqui!!', 'Restaurante', -22.0060872061745, -47.89112601963078);
INSERT INTO LOCALIZACAO (NOME, DESCRICAO, TIPO, LATITUDE, LONGITUDE) VALUES ('Macarronato', 'Venha comer um macarrão com a gente', 'Restaurante', -22.0065671566246, -47.890794766844905);
INSERT INTO LOCALIZACAO (NOME, DESCRICAO, TIPO, LATITUDE, LONGITUDE) VALUES ('Instituto De Ciências Matemáticas e de Computação', 'Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC) é um dos institutos pertencentes a Universidade de São Paulo (USP), localizado no campus de São Carlos.', 'Instituto', -22.006850663825084, -47.89492157391575);
INSERT INTO LOCALIZACAO (NOME, DESCRICAO, TIPO, LATITUDE, LONGITUDE) VALUES ('Portão Arquitetura', 'Portão central da USP São Carlos', 'Portão', -22.002739542558373, -47.898572116619555);
INSERT INTO LOCALIZACAO (NOME, DESCRICAO, TIPO, LATITUDE, LONGITUDE) VALUES ('Santa Casa de São Carlos', 'A Irmandade da Santa Casa de Misericórdia de São Carlos ou Santa Casa Clínicas está localizada no bairro de Vila Pureza, em São Carlos.', 'Ponto Estrégico', -22.011548184350158, -47.901350603735274);
