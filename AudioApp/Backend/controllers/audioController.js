const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const Audio = require('../models/audioModel');


const s3 = new AWS.S3({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'YOUR_S3_BUCKET_NAME',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    }
  })
}).single('audio');


exports.uploadAudio = (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    try {
      
      const audio = new Audio({
        filename: req.file.originalname,
        url: req.file.location // S3 file URL
      });
      await audio.save();
      res.json(audio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};


exports.getAllAudios = async (req, res) => {
  try {
    const audios = await Audio.find();
    res.json(audios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
