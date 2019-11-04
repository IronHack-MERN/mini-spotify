const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistSchema = new Schema(
  {
    name: { type: String},
    description: { type: String},
    image: { type: String},
  },
);

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;