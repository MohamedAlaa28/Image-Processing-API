import path from 'path';
import sharp from 'sharp';

//making function by sharp to get the image by filename and resize it by width and height and restore it.
const resizeImage = async (
  filename: string,
  width: number,
  hight: number
): Promise<void> => {
  const filePath = path.resolve(__dirname, `../../images/${filename}.jpg`);
  const outPut = path.resolve(
    __dirname,
    `../../images/thumb/${filename}_${width}_${hight}.jpg`
  );
  try {
    //getting the image by file name.
    await sharp(filePath)
      //resizing the image by width and height.
      .resize({
        width: width,
        height: hight
      })
      //restoring the image in the thumb folder in the images folder with the new name with the height and the width.
      .toFile(outPut);
  } catch (error) {
    console.log('error');
  }
};

export default resizeImage;
