const express = require('express');
const authController = require('../controller/authController');

const router = express.Router();

// router
//   .route('/signup')
//   //   .get(authController.getAllCourse)
//   .post(authController.signup);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// router
//   .route('/:id')
//   .get(authController.getCourse)
//   .patch(authController.updateCourse)
//   .delete(authController.deleteCourse);

module.exports = router;
