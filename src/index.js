const app = require('./server');
const port = 2000;

function call() {
  console.log(`Server rodando na porta ${port}`);
};

app.listen(port, call);