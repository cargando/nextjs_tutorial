const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
		const server = express();

		server.get('/posts/:id', (req, res) => {
			console.log('/posts/:id', req.params.id);
			const actualPage = '/post/view';
			const queryParams = { title: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});

		server.get('/articles/view/:id', (req, res) => {
			console.log('/articles/:id', req.params.id);
			const actualPage = '/articles/view';
			const queryParams = { title: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});

		server.get('/moovies/view/:id', (req, res) => {
			console.log('/moovies/:id', req.params.id);
			const actualPage = '/moovies/view';
			const queryParams = { id: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});


		server.get('*', (req, res) => {
			// console.log('simple * ', req);
			return handle(req, res)
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		})

	}).catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});