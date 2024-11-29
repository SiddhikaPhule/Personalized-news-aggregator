import express from 'express';
// import { getNewsByCategory } from '../controllers/articleController';
import { fetchNewsByCategory } from '../controllers/newsController';
import { createUser, getUsers } from '../controllers/userController';

const router = express.Router();

// Route for fetching news by category
// router.get('/news/:category', getNewsByCategory);
router.get('/news/:category', fetchNewsByCategory);
// Route to create a user
router.post('/signup', createUser);

// Route to fetch all users
router.get('/', getUsers);
export default router;
