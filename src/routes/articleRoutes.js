import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// get all articles (protected)
router.get('/', authenticate, (req, res) => {
  res.status(200).json({
    message: 'Get all articles'
  });
});

// create article (protected)
router.post('/', authenticate, (req, res) => {
  res.status(201).json({
    message: 'Article created'
  });
});

export default router;
