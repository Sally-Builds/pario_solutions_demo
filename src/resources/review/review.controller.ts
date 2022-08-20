import express, { Request, Response, NextFunction, Router } from "express";
import ReviewService from "./review.service";
import Controller from "@/utils/interfaces/Controller.interface";
import HttpException from "@/utils/exceptions/httpExceptions";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from './review.validation'
import authenticate from "@/middleware/authenticate.middleware";
import fileUploadMiddleware from '@/middleware/fileUpload.middleware'

import reviewController from '@/resources/review/review.controller'
import UpvoteController from "../upvote/upvote.controller";


class ApartmentController implements Controller {
    public path = '/reviews'
    public router = Router({mergeParams: true})
    private ReviewService = new ReviewService()
    
    private upvoteRouter = new UpvoteController().router


    private app = express()

    constructor(){
        this.initializeRouter()
    }

    private initializeRouter(){
        this.app.use(`${this.path}`, this.router)

        this.router.use(`${this.path}/:review_id/upvotes`, this.upvoteRouter)

        this.router.route(`/`)
        .post(fileUploadMiddleware.uploadFiles, fileUploadMiddleware.addFileToReqBody, authenticate, validationMiddleware(validate.create), this.create)
    }

    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            //add the req.user to the req body
            req.body.user = req.user.id
            //add the apartment id to the req body
            req.body.apartment = req.params.apartment_id
            const review = await this.ReviewService.create(req.body)

            res.status(201).json({
                status: 'success',
                review,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }
}

export default ApartmentController