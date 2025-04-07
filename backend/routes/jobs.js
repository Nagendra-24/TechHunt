<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.delete('/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
=======
backend/routes/jobs.js
>>>>>>> faa1e2756edf3f469ca6ec198a9f554dc6b6dd3e
