const express = require('express');
const Recommendation = require('../models/Recommendation');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newRec = new Recommendation({ ...req.body, userId: req.userId });
    await newRec.save();
    res.status(201).json(newRec);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:cvId', async (req, res) => {
  const recommendations = await Recommendation.find({ cvId: req.params.cvId });
  res.json(recommendations);
});

module.exports = router;
