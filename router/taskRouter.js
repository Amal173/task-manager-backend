const express=require('express')
const router=express.Router()
const { getTasks, createTasks, deleteTasks, editTasks}=require('../controller/task')

router.route('/').get(getTasks)
router.route('/').post(createTasks)
router.route('/:id').delete(deleteTasks)
router.route('/:id').put(editTasks)

module.exports=router


