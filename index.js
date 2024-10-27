// Frontend Server
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const api = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(api);
    res.render("index.ejs", { blogs: result.data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error retrieving blogs. Please try again later.");
  }
});

app.get("/edit/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    const { data: result } = await axios.get(`${api}/${blogId}`);
    res.render("form.ejs", { toEdit: true, action: `/edit/${blogId}`, method: 'post', title: result.title, blog: result.content, tag: result.tag });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error retrieving the blog for editing. Please try again later.");
  }
});

app.post("/edit/:id", async (req, res) => {
  const blogId = req.params.id;
  let blog = req.body;
  blog.content = blog.content.trim().replace(/^\s+|\s+$/g, '');
  blog['id'] = parseInt(blogId);
  try {
    await axios.put(api, blog);
    res.status(200).redirect('/');
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error updating the blog. Please try again later.");
  }
});

app.get("/new", async (req, res) => {
  try {
    res.render("form.ejs", { toEdit: true, action: '/add', method: 'post' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error rendering the new blog form. Please try again later.");
  }
});

app.post("/add", async (req, res) => {
  const newBlog = req.body;
  try {
    await axios.post(api, newBlog);
    res.status(200).redirect('/');
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error adding the blog. Please try again later.");
  }
});

app.get("/del/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    await axios.delete(`${api}/${blogId}`);
    res.status(200).redirect('/');
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error deleting the blog. Please try again later.");
  }
});

app.listen(port, () => {
  console.log(`Frontend Server is running at http://localhost:${port}`);
});