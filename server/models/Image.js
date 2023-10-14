const {Schema, model} = require("mongoose")

const imageSchema = new Schema({
    filename: String,
    data: Buffer,
    contentType: String,
  });

imageSchema.set("toJSON",{
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
   }
})
 const Image = model("Image", imageSchema)
 
 module.exports = Image