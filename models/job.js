// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   company: String,
//   role: String,
//   status: {
//     type: String,
//     enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
//     default: 'Applied',
//   },
//   date: Date,
//   link: String,
// });

// module.exports = mongoose.model('Job', jobSchema);


// models/job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
  date: { type: Date, default: Date.now },
  link: { type: String },
});

module.exports = mongoose.model("Job", jobSchema);
