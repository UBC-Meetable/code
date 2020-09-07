const express = require('express')
const router = express.Router()
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');




const s3 = new AWS.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
});


// const BASE_URL = "https://localhost:4000/graphql"

const uploadS3Video = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'socialgoodtodayorg',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
});
const uploadS3Image = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'socialgoodtodayorg',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
});

router.post('/uploadVideo', uploadS3Video.single('file'), (req, res) => {
  if (req) {
    console.log(req.file);
    res.json(req.file.location)

  }
});

router.post('/uploadImage', uploadS3Image.single('file'), (req, res) => {
  if (req) {
    console.log(req.file);
    res.json(req.file.location)

  }
});

 module.exports = router;