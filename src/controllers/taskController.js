const {
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require("../services/taskService");

module.exports = {
    getAllTask: async (req, res) => {
        let result = await getTask(req.query);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    postCreateTask: async (req, res) => {
        let result = await createTask(req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    updateTask: async (req, res) => {
        let result = await updateTask(req.body);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteTask: async (req, res) => {
        let result = await deleteTask(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
