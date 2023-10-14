const imageRouter = require("express").Router()
const multer = require('multer');
const sharp = require('sharp');
const Image = require('../models/Image');

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(
        null,
        file.originalname
      );
    },
  })

  const upload = multer({ storage: storage });

imageRouter.post("/", upload.single('docs'), async (req, res) => {
    const { filename, mimetype } = req.file;
    sharp(req.file.path)
    .jpeg({ quality: 80 }) // Ajusta la calidad a tu preferencia
    .toBuffer(async (err, data, info) => {
      if (err) {
        return res.status(500).send('Error al comprimir la imagen.');
      }

      // Crea un nuevo documento Image en Mongoose
      const image = new Image({
        filename: filename, // Nombre de la imagen comprimida
        data,
        contentType: mimetype + "", // Tipo de contenido (puedes ajustar esto según el formato)
      });
      console.log(filename)

      // Guarda el documento Image en MongoDB
        await image.save();
        res.send('Imagen comprimida y guardada exitosamente en MongoDB.');

    });
})

imageRouter.get('/:name', async (req, res) => {
    const imageName = req.params.name;
  
    const image = await Image.findOne({ filename: imageName });
  
    if (image) {
      res.contentType(image.contentType);
      res.send(image.data);
    } else {
      res.status(404).send('Imagen no encontrada');
    }
  });
module.exports = imageRouter
