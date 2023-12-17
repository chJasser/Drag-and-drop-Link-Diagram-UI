export const storageConfig = {
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const originalnameWithoutSpaces = file.originalname.replace(/\s+/g, '-');
    const fileExtension = originalnameWithoutSpaces.split('.').pop();
    const extension = fileExtension ? `.${fileExtension}` : '.txt';
    cb(null, `${originalnameWithoutSpaces}-${uniqueSuffix}${extension}`);
  },
};
