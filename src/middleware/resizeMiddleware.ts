import express from 'express';
import path from 'path';
import * as fs from 'fs';
import resizeImage from '../utilities/resize';

const resize = (req: express.Request, res: express.Response): void => {
  //getting the filename ,width and height from the query-string
  const data = req.query;
  const filename = `${data.filename}`;
  const width: number = parseInt(`${data.width}`);
  const hight: number = parseInt(`${data.hight}`);
  const outPut = path.resolve(
    __dirname,
    `../../images/thumb/${filename}_${width}_${hight}.jpg`
  );
  resizeImage(filename, width, hight);
  // checking if the image exists or not.
  if (fs.existsSync(outPut)) {
    //if it exists send the image directly.
    res.sendFile(outPut);
  } else {
    // if it does not exist call resize function to create a new resized image then send it.
    resizeImage(filename, width, hight);
    setTimeout(() => {
      res.sendFile(outPut);
    }, 100);
  }
};

export default resize;
