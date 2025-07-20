let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, require: true, min: 15, max: 99 },
  profile: { type: mongoose.Schema.Types.ObjectId, ref:"Profile" },
});

module.exports = mongoose.model("Person", personSchema);
