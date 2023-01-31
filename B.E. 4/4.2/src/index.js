const express = require('express');
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const pathMovies = path.resolve(__dirname, 'movies.json');

const app = express();

app.use(express.json());

const getFileMovies = async () => {
  const content = await readFile(pathMovies, 'utf-8');
  const response = JSON.parse(content);
  return response;
};

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.get('/movies/:id', async (req, res) => {
  const { params: { id } } = req;
  const content = await getFileMovies();
  const movie = content.find((m) => m.id === Number(id));
  res.status(200).json({ movie });
});

app.get('/movies', async (_req, res) => {
  const movies = await getFileMovies();
  res.status(200).json({ movies });
});

app.post('/movies', async (req, res) => {
  const { body: { movie, price } } = req;

  const content = await getFileMovies();

  const newId = Math.max(...content.map(({ id }) => id));

  const newMovie = {
    id: newId + 1,
    movie,
    price,
  };

  content.push(newMovie);

  await writeFile(pathMovies, JSON.stringify(content, null, 2));

  res.status(201).end();
});

app.delete('/movies/:id', async (req, res) => {
  const { params: { id } } = req;
  const content = await getFileMovies();

  const newContent = content.filter((movie) => movie.id !== Number(id));

  await writeFile(pathMovies, JSON.stringify(newContent, null, 2));

  res.status(204).end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta: ${PORT}`);
});
