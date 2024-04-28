export const isValidFileUploaded = (fileType: string) => {
  const validExtensions = ['png', 'jpeg', 'jpg', 'webp'];
  const fileExtension = fileType.split('/')[1];
  return validExtensions.includes(fileExtension);
};
