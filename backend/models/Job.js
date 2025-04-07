<<<<<<< HEAD
const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  type: String,
  postedAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Job', JobSchema);
=======
backend/models/Job.js
>>>>>>> faa1e2756edf3f469ca6ec198a9f554dc6b6dd3e
