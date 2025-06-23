import { Router } from 'express';
import Workouts from '../models/workoutModel.js';

const router = Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all workouts.' });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get single workout' });
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workouts.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a workout.' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a workout.' });
});

export default router;
