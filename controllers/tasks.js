const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
    const getAllTasks = await Task.find({});
    res.status(200).json({ getAllTasks })
})


const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create({
        name: req.body.name,
        completed: req.body.completed
    })
    res.status(201).json({ task })
})

//Get single task
const getTask = asyncWrapper(async (req, res) => {

    const getTask = await Task.findById(req.params.id)

    if (!getTask) {
        return res.status(404).json({ msg: `No task with id: ${req.params.id}` })
    }

    res.status(200).json(getTask)
})

//Delete task
const deleteTask = async (req, res) => {
    //delete

    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ message: `No task with id: ${taskID}` })
        }
        res.status(200).json({ task: null, status: 'success' })
    }
    catch (err) {
        res.status(404).json({ message: err })
    }
}

//Update task
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate(
            { _id: taskID },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!task) {
            return res.status(404).json({ msg: 'No taks found' })
        }
        res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({ msg: error })

    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};