const jsonServer = require('json-server');
const cors = require('cors');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Adiciona o middleware CORS
server.use(cors({
  origin: '*', // Allow requests from any origin
  methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
  allowedHeaders: 'content-type,Authorization'
}));
app.use(middlewares);
app.use(router);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
