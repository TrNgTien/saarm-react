import { useState } from 'react';
import ImageCrop, { makeAspectCrop } from 'react-image-crop';

// const ImageCropper = ({ src, onCrop }) => {
//   const [crop, setCrop] = useState({
//     unit: 'px',
//     x: 0,
//     y: 0,
//     width: 0,
//     height: 0,
//   });
//
//   const onImageLoaded = (image) => {
//     const initialCrop = makeAspectCrop(
//       {
//         width: image.naturalWidth,
//         height: image.naturalHeight,
//         aspect: 1, // Adjust aspect ratio as needed (e.g., 16:9)
//       },
//       image.naturalWidth / 2,
//     ); // Initial crop area in center
//
//     setCrop(initialCrop);
//   };
//
//   const onCropChange = (newCrop) => setCrop(newCrop);
//
//   const onCropCompleted = async (croppedArea, pixels) => {
//     const croppedImage = await getCroppedImg(src, pixels);
//     onCrop(croppedImage); // Pass cropped image to parent
//   };
//
//   return (
//     <ImageCrop
//       src={src}
//       crop={crop}
//       onChange={onCropChange}
//       onComplete={onCropCompleted}
//       onImageLoaded={onImageLoaded}>
//       <img
//         style={{ maxHeight: '400px', maxWidth: '600px' }}
//         src={src}
//         alt="Image to be cropped"
//       />
//     </ImageCrop>
//   );
// };
//
// export default ImageCropper;
