const express = require('express');
const Cv = require('../models/Cv');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newCv = new Cv({ ...req.body, userId: req.userId });
    await newCv.save();
    res.status(201).json(newCv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const cvs = await Cv.find({ visible: true });
  res.json(cvs);
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCv = await Cv.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Cv.findByIdAndDelete(req.params.id);
    res.json({ message: 'CV supprimé' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
