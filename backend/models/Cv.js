const mongoose = require('mongoose');

const CvSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  description: String,
  education: [String],
  experience: [String],
  visible: { type: Boolean, default: false },
});

module.exports = mongoose.model('Cv', CvSchema);
