const { PrismaClient } = require("./generated/prisma")

const express = require('express');
const app = express();
app.use (express.json()) 

const prisma = new PrismaClient()

const Port = 3000;

app.get('/', (req, res) => {
  res.send('This is a fullstack try!');
});

app.post('/user', async (req, res) => {
  const {content, title, cover} = req.body
  const post = await prisma.post.create({
    data: {
      content, title, cover
    },
  }) 
  res.send("Successfully Updated")
})

app.get('/posts', (req, res) => {
  res.send('Get all posts');
});

app.get('/posts/:id', (req, res) => {
  res.send(`Get post with ID: ${req.params.id}`);
});

app.post('/posts', (req, res) => {
  res.send('Create a new post');
});  

app.put('/posts/:id', (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
});

app.delete('/posts/:id', (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
});

app.listen(Port, () => {
 console.log('Server is running on http://localhost:' + Port);
});

