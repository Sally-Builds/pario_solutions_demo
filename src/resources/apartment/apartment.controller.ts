import express, { Request, Response, NextFunction, Router } from "express";
import ApartmentService from "./apartment.service";
import Controller from "@/utils/interfaces/Controller.interface";
import HttpException from "@/utils/exceptions/httpExceptions";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from './apartment.validation'
import authenticate from "@/middleware/authenticate.middleware";
import Apartment from "./apartment.interface";

class ApartmentController implements Controller {
    public path = '/apartments'
    public router = Router()
    private ApartmentService = new ApartmentService()

    constructor(){
        this.initializeRouter()
    }

    private initializeRouter(){
        this.router.route(`${this.path}`)
        .post(authenticate, validationMiddleware(validate.create), this.create)
        .get(this.getApartments)

        this.router.route(`${this.path}/:id`)
        .get(this.getApartment)
    }

    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            //add the req.user to the req body
            req.body.user = req.user.id
            const apartment = await this.ApartmentService.create(req.body)

            res.status(201).json({
                status: 'success',
                apartment,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

    private getApartments = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const apartments = await this.ApartmentService.getAll()

            res.status(201).json({
                status: 'success',
                result: (apartments as any).length,
                apartments,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

    private getApartment = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const apartment = await this.ApartmentService.get(req.params.id)

            res.status(201).json({
                status: 'success',
                apartment,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

}

export default ApartmentController