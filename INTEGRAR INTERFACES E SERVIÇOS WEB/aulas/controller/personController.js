const Person = require("../model/person.js");

const createPerson = async (req, res) => {
  const { name, age } = req.body;

  const newPerson = new Person({
    name,
    age,
  });

  await newPerson.save();

  res.json({
    message: "Tarefa criada com sucesso!",
    person: newPerson,
  });
};

const getAllPersons = async (req, res) => {
  const person = await Person.find().populate('profile');
  res.json(person);
};

const deletePerson = async (req, res) => {
  const { id } = req.params;

  await Person.deleteOne({_id: id})
  res.json({ message: 'Person removed successfully!' });
};

const editPerson = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  let person = await Task.findByIdAndUpdate(id, { name, age });
  res.status(200).json({
    message: 'Tarefa atualizada com sucesso!',
    person,
  });
};

module.exports = { getAllPersons, createPerson, editPerson, deletePerson };
