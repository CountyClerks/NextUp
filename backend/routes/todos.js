import {Router} from 'express';
import pool from '../db.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const {title, description, completed, category} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (title, description, completed, category) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, description, completed || false, category]
        );
        res.json(newTodo.rows[0]);
    }   catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//Instead of getting all todos, get todos by category to reduce data sent
router.get('/:category', async (req, res) => {
    const category = req.params.category;
    try {
        const allTodos = await pool.query(`SELECT * FROM todo WHERE category = $1`, [category]);
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, completed, category} = req.body;
        const updatedTodo = await pool.query(
            "UPDATE todo SET title = $1, description = $2, completed = $3, category = $4 WHERE id = $5 RETURNING *",
            [title, description, completed, category, id]
        );
        res.json({
            message: "Todo was updated!",
            todo: updatedTodo.rows[0]
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM todo WHERE id = $1", [id]);
        res.json({message: "Todo deleted"});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

export default router;

