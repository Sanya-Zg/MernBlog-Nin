import { Router } from 'express';
import {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workoutControllers.js';

const router = Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

export default router;
