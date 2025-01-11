import Todo from '../models/TodoModel.js'


export const getAllTodos = async (req,res)=>{
    try {
        const todos = await Todo.find();
        if (!todos) {
            res.status(404).json({message:'Not found'})
        }
        res.status(200).json(todos)
        
    } catch (error) {
        console.log(error)
    }
}

export const createTodo = async (req,res)=>{
    try {
        const {title,completed} = req.body;
        const newTodo = new Todo({title,completed});
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo)
        
    } catch (error) {
        console.log(error)
    }
}