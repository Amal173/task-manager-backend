const tasks = require('../model/taskModel')
const asyncHandler = require('express-async-handler')


const getTasks = asyncHandler(async (req, res) => {
    try {
        const Task = await tasks.find()
        if (!Task) {
            res.status(404).json({ error: "tasks not found" })
        }
        res.status(200).json({ Task })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
})


const createTasks = asyncHandler(async (req, res) => {
    const { list, pin } = req.body
    const Task = await tasks.create({
         list, pin
    })
    res.status(201).json({ Task })
})


const deleteTasks = asyncHandler(async (req, res) => {
    const id = req.params.id
    const task = await tasks.findById(id)
    if (!task) {
        res.status(404).json({ error: "tasks not found" })
    }
    const Task = await tasks.findByIdAndDelete(id)
    res.status(201).json({ Task })
})


const editTasks = asyncHandler(async (req, res) => {
    const id = req.params.id
    const { } = req.body
    const task = await tasks.findById(id)
    if (!task) {
        res.status(404).json({ error: "tasks not found" })
    }
    const Task = await tasks.findByIdAndUpdate(id)
    res.status(201).json({ Task })
})


module.exports = { getTasks, createTasks, deleteTasks, editTasks }