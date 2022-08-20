import path from 'path'
import multer from 'multer'
import { NextFunction, Request, Response } from 'express'
import HttpException from '@/utils/exceptions/httpExceptions'

const multerStorageImage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.mimetype.startsWith('image')) {
            cb(null, path.join(__dirname, '../../public/images'))
        }else {
            cb(null, path.join(__dirname, '../../public/videos'))
        }
    },
    filename: (req, file, cb) => {
        if(file.mimetype.startsWith('image')) {
            cb(null, 'image_' + req.params.apartment_id + Date.now() + path.extname(file.originalname.trim()))
        }else {
            cb(null, 'video_' + req.params.apartment_id + Date.now() + path.extname(file.originalname.trim()))
        }
    }
})

const multerFilterImage = (req: Request, file:any, cb:any) => {
    if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video')) {
      cb(null, true);
    } else {
      cb(new HttpException('Not an image. Please upload only images', 400), false);
    }
  };



  
  const upload = multer({storage: multerStorageImage, fileFilter: multerFilterImage})
  const uploadFiles = upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'videos', maxCount: 3 },
  ])

  const addFileToReqBody = (req: Request, res:Response, next:NextFunction) => {
    let videos: string[] = []
    let images: string[] = []

    if((req as any).files.videos) {
        //loop through the videos and push to the video array
        (req as any).files.videos.forEach((e:any) => {
            videos.push(e.filename)
        })
    }

    if((req as any).files.images) {
        //loop through the videos and push to the video array
        (req as any).files.images.forEach((e:any) => {
            images.push(e.filename)
        })
    }

    req.body.images = images
    req.body.videos = videos

    next()
  }


  export default {uploadFiles, addFileToReqBody}