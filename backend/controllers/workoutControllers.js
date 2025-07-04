import Workout from '../models/workoutModel.js';
import mongoose from 'mongoose';

// get all workouts
export const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
// get single workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such workout!' });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404).json({ error: 'No such workout' });
  }
  res.status(200).json(workout);
};
// create a new workout
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (emptyFields.length > 0) {
    res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such workout' });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) {
    res.status(400).json({ error: 'No such workout' });
  }
  res.status(200).json(workout);
};
// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such workout!' });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    res.status(400).json({ error: 'No such workout.' });
  }
  res.status(200).json(workout);
};
