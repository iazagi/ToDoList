const PORT = process.env.PORT ?? 8000;
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const pool = require('./db');
const cors = require('cors');

const app = express();

//app.get('/', (req, res) => {});
app.use(cors());
app.use(express.json());
//GET ALL TODOS
app.get('/todos/:userEmail', async (req, res) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(
      'SELECT * FROM todos WHERE user_email = $1',
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
});

// CREATE NEW TODOS

app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
      [id, user_email, title, pprogress, date]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
