const { PrismaClient } = require("./generated/prisma")

const express = require('express');
const cors = require('cors');
const app = express();
app.use (express.json())
app.use (cors()) 


const prisma = new PrismaClient()

const Port = 3000;

app.get('/', async (req, res) => {
  const post = await prisma.post.findMany({
  }) 
  console.log (post)
  res.send(post);
});

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.get('/posts/:id', async (req, res) => {
  
  res.send(`Get post with ID: ${req.params.id}`);
});

app.post('/posts', async (req, res) => {
  // catch data from user/postman 

  console.log (req.body)
 
  const createMany = await prisma.post.createMany({
  data: req.body,
  skipDuplicates: true,
})
  res.send('Create a new post');
});

app.put('/posts/:id', async (req, res) => {

  console.log(req.params.id)

  const updatedPost = await prisma.post.update({
    where: {
      id: Number(req.params.id)
    },
      data: { 
         title: req.body.title
    },
  });
  console.log(updatedPost);

  res.send(`Update post with ID: ${req.params.id}`);
});

app.delete('/posts/:id', async (req, res) => {

  const deletedPost = await prisma.post.delete({
    where: {
      id: Number(req.params.id)
    },
  });
  console.log('Deleted post:', deletedPost);

  res.send(`Delete post with ID: ${req.params.id}`);
});

app.listen(Port, () => {
 console.log('Server is running on http://localhost:' + Port);
});

