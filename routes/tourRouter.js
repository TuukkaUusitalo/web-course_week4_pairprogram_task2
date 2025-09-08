const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers');

// GET /users
router.get('/', getAllTours);

// POST /users
router.post('/', createTour);

// GET /users/:userId
router.get('/:tourId', getTourById);

// PUT /users/:userId
router.put('/:tourId', updateTour);

// DELETE /users/:userId
router.delete('/:tourId', deleteTour);

module.exports = router;
