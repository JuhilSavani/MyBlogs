import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const api = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const result  = await axios.get(`${api}`);
  res.render("index.ejs", { blogs: result.data });
});

app.get("/edit/:id", async (req, res) => {
  const blogId = req.params.id;
  const {data: result} = await axios.get(`${api}/${blogId}`);
  res.render("form.ejs", { toEdit: true,  action: `/edit/${blogId}`, method: 'post', title: result[0].title, blog: result[0].content, tag: result[0].tag});
});

app.post("/edit/:id", async (req, res) => {
  const blogId = req.params.id;
  let blog = req.body;
  blog.content = blog.content.trim().replace(/^\s+|\s+$/g, '');
  blog['id'] = parseInt(blogId);
  await axios.put(`${api}`, blog);
  res.status(200).redirect('/');
});

app.get("/new", async (req, res) => {
  res.render("form.ejs", { toEdit: true,  action: '/add', method:'post'});
});

app.post("/add", async (req, res) => {
  const newBlog = req.body;
  await axios.post(`${api}`, newBlog);
  res.status(200).redirect('/');
});

app.get("/del/:id", async (req, res) => {
  const blogId = req.params.id;
  await axios.delete(`${api}/${blogId}`);
  res.status(200).redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
