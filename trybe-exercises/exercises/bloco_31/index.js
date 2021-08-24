const express = require('express');

const authorController = require('./mvc_exemplo/controllers/authorController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './mvc_exemplo/views');

app.get('/authors', authorController.listAuthors);
app.get('/authors/:id', authorController.showAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});