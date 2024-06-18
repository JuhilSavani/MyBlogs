import pg from "pg";
import express from "express";
import env from "dotenv";
env.config();

const app = express();
const port = 4000;

app.use(express.json());

const db = new pg.Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  password: process.env.PG_PWD,
  user: process.env.PG_USER,
  database: process.env.PG_DB,
});

db.connect();

app.get("/", async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM my_blogs ORDER BY id ASC;`);
    res.status(200).send(result.rows);
  } catch (e) {
    console.log(e);
  }
});

app.get("/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    const result = await db.query(`SELECT * FROM my_blogs WHERE id=$1;`, [
      blogId,
    ]);
    res.status(200).send(result.rows);
  } catch (e) {
    console.log(e);
  }
});

app.put("/", async (req, res) => {
  try {
    const blog = req.body;
    await db.query(
      `UPDATE my_blogs SET title = $1, content = $2, tag = $3 WHERE id = $4;`,
      [blog.title, blog.content, blog.tag, blog.id]
    );
    res.status(200).send("success");
  } catch (e) {
    console.log(e);
  }
});

app.post("/", async (req, res) => {
  try {
    const maxIdResult = await db.query('SELECT MAX(id) FROM my_blogs');
    const maxId = maxIdResult.rows[0].max;
    await db.query(`SELECT setval('my_blogs_id_seq', $1)`, [maxId]);
    const newBlog = req.body;
    let date = new Date().toDateString().split(" ");
    date = date[1] + " " + date[2] + ", " + date[3];
    await db.query(
      `INSERT INTO my_blogs (title, content, date, tag) VALUES ($1, $2, $3, $4)`,
      [newBlog.title, newBlog.content, date, newBlog.tag]
    );    
    res.status(200).send("success");
  } catch (e) {
    console.log(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    await db.query(
      `DELETE FROM my_blogs WHERE id = $1;`,
      [blogId]
    );
    res.status(200).send("success");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
