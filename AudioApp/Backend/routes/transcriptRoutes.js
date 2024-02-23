const express = require('express');
const router = express.Router();
const transcriptController = require('../controllers/transcriptController');

// Route for transcribing audio
router.get('/:audioUrl', transcriptController.transcribeAudio);

module.exports = router;
