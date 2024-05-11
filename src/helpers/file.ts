export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB limit

export const isValidFileUploaded = (fileType: string): boolean => {
  if (!fileType) {
    return false;
  }

  const validExtensions = ['png', 'jpeg', 'jpg', 'webp'];
  const fileExtension = fileType.split('/')[1];

  return validExtensions.includes(fileExtension);
};
