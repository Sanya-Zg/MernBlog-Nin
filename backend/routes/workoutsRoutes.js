import { Router } from 'express';
import {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workoutControllers.js';
import requireAuth from '../middleware/requireAuth.js';

const router = Router();

// require auth for all workout routes
router.use(requireAuth);

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
