import express from 'express';
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './multer-test/upload/');
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

const avatarUpload = upload.single('avatar');

app.post('/', avatarUpload, (req, res) => {
    console.log(req.file);
    console.log(req.body);

    res.send('OK');
});

app.listen(8080, () => {
  console.log('SERVER DONE');
});
