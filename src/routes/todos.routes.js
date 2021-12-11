import { Router } from "express";
import {getTODOS, addTodo, deleteTodo, updateTodo, updateTodotext} from "../controllers/todos.controller.js";
const router=Router();


router.get('/todos', getTODOS);
router.post('/todos', addTodo);
router.delete('/todos/:id', deleteTodo);
router.post('/todos/:id',updateTodo );
router.post('/todos/update/:id',updateTodotext );

export default router;