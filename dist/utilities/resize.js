"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
//making function by sharp to get the image by filename and resize it by width and height and restore it.
const resizeImage = (filename, width, hight) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path_1.default.resolve(__dirname, `../../images/${filename}.jpg`);
    const outPut = path_1.default.resolve(__dirname, `../../images/thumb/${filename}_${width}_${hight}.jpg`);
    try {
        //getting the image by file name.
        yield (0, sharp_1.default)(filePath)
            //resizing the image by width and height.
            .resize({
            width: width,
            height: hight
        })
            //restoring the image in the thumb folder in the images folder with the new name with the height and the width.
            .toFile(outPut);
    }
    catch (error) {
        console.log('error');
    }
});
exports.default = resizeImage;
