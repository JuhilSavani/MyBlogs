// Backend Server
import express from "express";
import dotenv from "dotenv";
import { connectPostgres } from "./config/sequelize.config.js";
import { Blog } from './models/blog.models.js'
dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());

connectPostgres();

app.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['id', 'ASC']] });
    res.status(200).send(blogs);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findByPk(blogId);
    if (blog) {
      res.status(200).send(blog);
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.put("/", async (req, res) => {
  try {
    const { id, title, content, tag } = req.body;
    const blog = await Blog.findByPk(id);
    if (blog) {
      blog.title = title;
      blog.content = content;
      blog.tag = tag;
      await blog.save();
      res.status(200).send("success");
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.post("/", async (req, res) => {
  try {
    const newBlog = req.body;
    const date = new Date().toDateString().split(" ");
    const formattedDate = `${date[1]} ${date[2]}, ${date[3]}`;
    
    const blog = await Blog.create({
      title: newBlog.title,
      content: newBlog.content,
      date: formattedDate,
      tag: newBlog.tag
    });
    
    res.status(201).send(blog);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedCount = await Blog.destroy({ where: { id: blogId } });
    if (deletedCount > 0) {
      res.status(200).send("success");
    } else {
      res.status(404).send('Blog not found');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Backend Server is running at http://localhost:${port}`);
});
