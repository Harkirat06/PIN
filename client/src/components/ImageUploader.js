import { useState, useEffect, useContext } from "react";
import { registerImage } from "./Axios";

function ImageUploader({context}) {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    registerImage(file);
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div
        onDrop={handleImageDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
      >
        Arrastra y suelta una imagen aquí
      </div>
    </div>
  );
}

export default ImageUploader