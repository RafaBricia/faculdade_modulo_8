const person = require("../model/person.js");
const Profile = require("../model/profile.js");

const createProfile = async (req, res) => {
  const { occupation, phone, address, personId } = req.body;

  const newProfile = new Profile({
    occupation,
    phone,
    address,
    person: personId

  });

  await newProfile.save()

  await person.updateOne(
    { _id: personId },
    { $set: { profile: newProfile._id } }
  )

  res.json({
    message: "Tarefa criada com sucesso!",
    profile: newProfile,
  });
};

const getAllProfiles = async (req, res) => {
  const profiles = await Profile.find().populate('person');
  res.json(profiles);
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;

  await Profile.deleteOne({ _id: id });
  res.json({ message: "Profile removed successfully!" });
};

const editProfile = async (req, res) => {
  const { id } = req.params;
  const { occupation, phone, address, personId } = req.body;

  let profile = await Profile.findByIdAndUpdate(id, { occupation, phone, address, personId });
  res.status(200).json({
    message: "Profile atualizada com sucesso!",
    profile,
  });
};

module.exports =  {createProfile, getAllProfiles, deleteProfile, editProfile }
