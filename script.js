const http = require('http');

const server = http.createServer((req, res) => {
	console.log('Запрос получен');
	 let count = 0;
	if (req.url === '/') {
		count++;
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8',
		})
		res.end(`<h1> Добро пожаловать на мой сайт!</h1>
				<a href="localhost:${port}/about">Перейти на About</a>
				<h2>Страница просмотрена ${count} раз</h2>
			`)
	} else if (req.url === '/about') {
		count++;
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8',
		})
		res.end(`<h1>About</h1>
				<a href="localhost:${port}">Перейти на главную страницу</a>
				<h2>Страница просмотрена ${count} раз</h2>
			`)
	} else {
		count++;
		res.writeHead(404, {
			'Content-Type': 'text/html; charset=UTF-8',
		})
		res.end(`<h1>Страница не найдена!</h1>
				<h2>Страница просмотрена ${count} раз</h2>
			`)
	}
})

const port = 3000;

server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
})