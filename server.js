// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Sample blog post data
const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'This is my first blog post. I am happy to be here!',
    author: 'John Doe',
    date: '2025-09-07'
  },
  {
    id: 2,
    title: 'Learning Node.js',
    content: 'Node.js is a powerful runtime environment. It is great for building scalable network applications.',
    author: 'Jane Smith',
    date: '2025-09-05'
  },
  {
    id: 3,
    title: 'The Future of AI',
    content: 'Artificial Intelligence is rapidly evolving. We are now seeing its application in almost every field.',
    author: 'Alice Johnson',
    date: '2025-09-03'
  }
];

// Middleware
app.use(express.json());
app.use(cors());

// --- API Endpoints ---

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});