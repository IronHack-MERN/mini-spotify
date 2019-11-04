const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema(
  {
    title: { type: String},
    description: { type: String},
    year: { type: String},
    image: { type: String},
    artist: { type: Schema.ObjectId, ref: 'Artist'},
  },
);

const Album = mongoose.model('User', albumSchema);

module.exports = Album;