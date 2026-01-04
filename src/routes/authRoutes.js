import express from 'express';

const router = express.Router();

// register user
router.post('/register', (req, res) => {
  res.status(201).json({
    message: 'Register endpoint'
  });
});

// login user
router.post('/login', (req, res) => {
  res.status(200).json({
    message: 'Login endpoint'
  });
});

export default router;
