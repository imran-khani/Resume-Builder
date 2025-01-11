import express from 'express'
import { createTodo, getAllTodos } from '../controllers/TodoController.js';


const router = express.Router();


router.get('/',getAllTodos);
router.post('/',createTodo)

export default router;