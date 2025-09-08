const Tour = require("../models/tourModels");

// GET /users
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

// POST /users
const createTour = (req, res) => {
  res.json({ message: "Hello from create" });
  const newTour = Tour.addOne({ ...req.body });

  if (newTour) {
    res.status(201).json(newTour); // 201 Created
  } else {
    res.status(500).json({ message: "Failed to create tour" });
  }
};

// GET /users/:userId
const getTourById = (req, res) => {
  res.json({ message: "Hello from getById" });
  const tourId = req.params.tourId;
  const tour = Tour.findById(tourId);

  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// PUT /users/:userId
const updateTour = (req, res) => {
  res.json({ message: "Hello from update" });
  const tourId = req.params.tourId;
  const tour = Tour.updateOneById(tourId, { ...req.body });
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "tour not found" });
  }
};

// DELETE /users/:userId
const deleteTour = (req, res) => {
  res.json({ message: "Hello from delete" });
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);

  if (isDeleted) {
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
