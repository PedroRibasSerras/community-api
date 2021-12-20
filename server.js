require('dotenv').config()
const express = require('express')
const connection = require('./database')
const cors = require('cors')

require('./database')

const app = express()
const port = 3333
const router = express.Router()

app.use(cors())

router.get('/localizacoes', async (req, res) => {
	let query = 'SELECT * FROM LOCALIZACAO'
	console.log(
		'Pegando as marcações e os tipos de marcações do mapa principal.'
	)

	let resultLocalizacoes = await connection
		.promise()
		.query(query)
		.then((data) => {
			return data[0]
		})
		.then((results) => {
			if (results.length > 0) {
				return results.map((result) => {
					return {
						name: result.NOME,
						type: result.TIPO,
						coordinates: {
							latitude: result.LATITUDE,
							longitude: result.LONGITUDE,
						},
					}
				})
			}
			return []
		})

	query = 'SELECT * FROM TIPO_LOCALIZACAO'

	let resultTypes = await connection
		.promise()
		.query(query)
		.then((data) => {
			return data[0]
		})
		.then((results) => {
			if (results.length > 0) {
				return results.map((result) => {
					return {
						name: result.NOME,
						icon: result.ICONE,
						color: '#' + result.COR,
					}
				})
			}
			return []
		})

	res.json({
		data: {
			markersTypes: resultTypes,
			markers: resultLocalizacoes,
		},
	})
})

router.get('/eventos', async (req, res) => {
	let queryConstraint = ''
	if (req.query.creator) {
		queryConstraint += 'criador = ' + req.query.creator
	}

	let query =
		'SELECT TITULO AS title, DESCRICAO AS description, LATITUDE AS latitude, LONGITUDE AS longitude, DATA_EVENTO AS date, ENDERECO AS endereco, CRIADOR AS creator, O.NOME AS creatorName FROM EVENTO AS E ' +
		'INNER JOIN  ORGANIZACAO as O ON E.CRIADOR = O.ID' +
		(!!queryConstraint ? ' WHERE ' + queryConstraint : '')

	console.log(
		'Pegando as marcações e os tipos de marcações do mapa principal.'
	)

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return data
		})

	res.json({ data: result[0] })
})

router.get('/notificacoes', async (req, res) => {
	let queryConstraint = ''
	if (req.query.creator) {
		queryConstraint += 'criador = ' + req.query.creator
	}

	let query =
		'SELECT CRIADOR AS creator, O.NOME AS creatorName, TITULO AS title, DATA_NOTIFICACAO AS date, DESCRICAO AS description FROM NOTIFICACAO as N ' +
		'INNER JOIN  ORGANIZACAO as O ON N.CRIADOR = O.ID' +
		(!!queryConstraint ? ' WHERE ' + queryConstraint : '')

	console.log('Pegando todas as notificações.')

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return data
		})

	res.json({ data: result[0] })
})

router.post('/criarContaOrganizacional', async (req, res) => {
	const { nome, tipo, email, senha } = req.body

	console.log('Insere um novo usuario organizacional no banco de dados.')

	let query =
		'INSERT INTO ORGANIZACAO (NOME, TIPO, EMAIL, SENHA) VALUES ("' +
		nome +
		'", ' +
		tipo +
		', UPPER("' +
		email +
		'"), PASSWORD("' +
		senha +
		'"))'

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return { data: data[0] }
		})
		.catch((err) => {
			if (err.errno == 1062) {
				return { errno: 1062, errMessage: 'E-mail already registered.' }
			}

			console.log(err)

			return { errno: 0, errMessage: 'Internal Error.' }
		})

	res.json(result)
})

router.post('/loginOrganizacional', async (req, res) => {
	let { email, senha } = req.body

	console.log('Busca o usuário no banco de dados para verificar o login.')

	let query =
		'SELECT O.ID as id, O.NOME as name, O.TIPO as type FROM ORGANIZACAO AS O WHERE O.EMAIL = UPPER("' +
		email +
		'") AND O.SENHA = PASSWORD("' +
		senha +
		'")'

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return data[0]
		})

	res.json({ data: result[0] })
})

router.post('/eventos/criar', async (req, res) => {
	let {
		title,
		description,
		latitude,
		longitude,
		dataEhoraEvento,
		endereco,
		criador,
	} = req.body

	console.log('Insere um evento no banco de dados.')

	let query =
		'INSERT INTO EVENTO (TITULO, DESCRICAO, DATA_EVENTO, LATITUDE, LONGITUDE, ENDERECO, CRIADOR) VALUES ("' +
		title +
		'", "' +
		description +
		'", "' +
		dataEhoraEvento +
		'", ' +
		latitude +
		', ' +
		longitude +
		', "' +
		endereco +
		'", ' +
		criador +
		')'

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return { data: data[0] }
		})
		.catch((err) => {
			if (err.errno == 1062) {
				return { errno: 1062, errMessage: 'E-mail already registered.' }
			}

			console.log(err)

			return { errno: 0, errMessage: 'Internal Error.' }
		})

	res.json(result)
})

router.post('/notificacoes/criar', async (req, res) => {
	let { title, description, creator } = req.body

	console.log('Insere uma notificação no banco de dados.')

	let query =
		'INSERT INTO NOTIFICACAO (TITULO, DESCRICAO, CRIADOR) VALUES ("' +
		title +
		'", "' +
		description +
		'", ' +
		creator +
		')'

	console.log(query)

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return { data: data[0] }
		})
		.catch((err) => {
			if (err.errno == 1062) {
				return { errno: 1062, errMessage: 'E-mail already registered.' }
			}

			console.log(err)

			return { errno: 0, errMessage: 'Internal Error.' }
		})

	res.json(result)
})

router.post('/notificacoes/delete', async (req, res) => {
	let { title, date } = req.body

	console.log('Deleta uma notificação do banco de dados.')

	let query =
		'DELETE FROM NOTIFICACAO WHERE TITULO = "' +
		title +
		'" AND DATA_NOTIFICACAO = "' +
		date +
		'" '
	console.log(query)

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return { data: data[0] }
		})
		.catch((err) => {
			if (err.errno == 1062) {
				return { errno: 1062, errMessage: 'E-mail already registered.' }
			}

			console.log(err)

			return { errno: 0, errMessage: 'Internal Error.' }
		})

	console.log(result)
	res.json(result)
})

router.post('/eventos/delete', async (req, res) => {
	let { title, date } = req.body

	console.log('Deleta um evento do banco de dados.')

	let query =
		'DELETE FROM EVENTO WHERE TITULO = "' +
		title +
		'" AND DATA_EVENTO = "' +
		date +
		'" '
	console.log(query)

	let result = await connection
		.promise()
		.query(query)
		.then((data) => {
			return { data: data[0] }
		})
		.catch((err) => {
			if (err.errno == 1062) {
				return { errno: 1062, errMessage: 'E-mail already registered.' }
			}

			console.log(err)

			return { errno: 0, errMessage: 'Internal Error.' }
		})

	console.log(result)
	res.json(result)
})

app.use(express.json())
app.use(router)

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
