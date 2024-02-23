const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

// Route for uploading audio
router.post('/upload', audioController.uploadAudio);

// Route for getting all audios
router.get('/', audioController.getAllAudios);

module.exports = router;
