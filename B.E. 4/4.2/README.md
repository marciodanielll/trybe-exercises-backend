# Dia B.E. 4.2
---
<details> 
  <summary><strong>Exercício 1</strong></summary>

  Qual é a função do código de status ``400`` e ``422``?
</details>

-----
<details> 
  <summary><strong>Exercício 2</strong></summary>

  Qual é a função do código de status ```401```?

  Crie o diretório ```src``` e dentro dele um arquivo ```movies.json``` com o os filmes da nossa locadora:


````json
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
````
Agora, faça os exercícios a seguir:
</details>

---
<details> 
  <summary><strong>Exercício 3</strong></summary>

  Crie um servidor Node.js utilizando o framework ```Express```.
</details> 

---
<details> 
  <summary><strong>Exercício 4</strong></summary>

  Crie uma função de leitura do JSON com o modulo ```fs```.
</details> 

---
<details>
  <summary><strong>Exercício 5</strong></summary>

  Crie um endpoint do tipo ```GET com a rota /movies/:id```, que possa listar um filme do JSON por id.
</details> 

---
<details> 
  <summary><strong>Exercício 6</strong></summary>

  Crie um endpoint do tipo ```GET``` com a rota ```/movies```, que possa listar todos os filmes do JSON.
</details>

---
<details> 
  <summary><strong>Exercício 7</strong></summary>

Crie um endpoint do tipo ```POST``` com a rota ```/movies```, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

```json
{
  "movie": "Vingadores",
  "price": 5
}
```
</details>

---
<details> 
  <summary><strong>Exercício 8</strong></summary>

  Crie um endpoint do tipo ```PUT``` com a rota ```/movies/:id```, que possa editar informações de um filme do JSON.

  O corpo da requisição deve receber o seguinte formato:
  ```json
  {
  "movie": "Vingadores: Ultimato",
  "price": 5
  }
  ```
</details>

---
<details> 
  <summary><strong>Exercício 9</strong></summary>

  Crie um endpoint do tipo ```DELETE``` com a rota ```/movies/:id``` que possa deletar um filme do JSON.
</details>