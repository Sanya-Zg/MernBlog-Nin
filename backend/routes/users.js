import { Router } from 'express';
import { loginUser, signupUser } from '../controllers/userControllers.js';

const router = Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

export default router;
