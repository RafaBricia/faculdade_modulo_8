const Task = require("../model/task.js");

const createTask = async (req, res) => {
  const { title, personId, projectIds } = req.body;
  const finished = false;

  const newTask = new Task({
    title,
    finished,
    person: personId,
    projects: projectIds,
  
  });

  const savedTask = await Task.save();
  
  if (projectIds && projectIds.length > 0){
    const Project = require('../model/project.js')
  
    await Project.updateMany(
      { _id: {$in: projectIds }},
      { $push: { tasks: savedTask._id }}
    );
  
  }

  await newTask.save();
  res.json({
    message: "Tarefa criada com sucesso!",
    task: newTask,
  });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("person", "projects");
  res.json(tasks);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  await Task.deleteOne({ _id: id });
  res.json({ message: "Task removed successfully!" });
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { title, finished } = req.body;

  let task = await Task.findByIdAndUpdate(id, { title, finished });

  res.json({
    message: "Tarefa atualizada com sucesso!",
    task,
  });
};

module.exports = { getAllTasks, createTask, editTask, deleteTask };
