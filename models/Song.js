const mongoose = require('mongoose');

const { Schema } = mongoose;

const songSchema = new Schema(
  {
    number: { type: String },
    name: { type: String },
    duration: { type: String },
    file:  { type: String },
    album:  { type: Schema.ObjectId, ref: 'Album' },
  },
);

const Song = mongoose.model('Song', songSchema);

module.exports = Song;