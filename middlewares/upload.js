const multer = require("multer");
const path = require("path");
// const fs = require("fs/promises");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
});
const upload = multer({
  storage: multerConfig,
});
// const contacts = [];
module.exports = upload;
