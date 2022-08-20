import express, { Request, Response, NextFunction, Router } from "express";
import UpvoteService from "./upvote.service";
import Controller from "@/utils/interfaces/Controller.interface";
import HttpException from "@/utils/exceptions/httpExceptions";

class UpvoteController implements Controller {
    public path = '/upvotes'
    public router = Router({mergeParams: true})
    private UpvoteService = new UpvoteService()

    private app = express()

    constructor(){
        this.initializeRouter()
    }

    private initializeRouter(){

        this.app.use(`${this.path}`, this.router)

        this.router.route(`/`)
        .get(this.create)
    }

    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            //add the req.ip to the req body
            req.body.ipAddress = req.ip
            //add the req.user to the req body, if user is logged in
            req.body.review = req.params.review_id
            if(req.user) {
                req.body.user = req.user.id
            }
            const upvote = await this.UpvoteService.create(req.body)

            res.status(201).json({
                status: 'success',
                upvote,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }
}

export default UpvoteController