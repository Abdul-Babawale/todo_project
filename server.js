const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); //req.body  

//ROUTES//

//create a todo

app.post("/todo", async(req, res) => {
    try{

        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1) RETURNING *',
            [description]
        );
        
        // console.log(description);
        // res.status(200);
        // res.send(description);
        // res.end();

        // res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//app.get('/', (err, res) => {
 //	res.status(200);
 //	res.send('Hello, this is a simple text response!');
// });
// app.get('/users', (err, res) => {
// 	res.status(200);
// 	res.send('this is user');
// });

//get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodo = await pool.query('SELECT * FROM todo');
        res.json(allTodo.rows);
    }  catch (err) {
        console.log(err.message);
    }
});

//get a todo
app.get('/todo/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  });

//update a todo

app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} =req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE  todo_id = $2", 
        [description, id]);

        res.json("todo was updated");
    } catch (err) {
        console.erroe(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");

});
