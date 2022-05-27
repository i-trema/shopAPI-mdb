const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  titre: {
    type: String,
    require: true,
    max: 250,
  },
  description: {
    type: String,
    require: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  disponibilite: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Articles", articleSchema);
