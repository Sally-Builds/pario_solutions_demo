import express, { Request, Response, NextFunction, Router } from "express";
import ApartmentService from "./apartment.service";
import Controller from "@/utils/interfaces/Controller.interface";
import HttpException from "@/utils/exceptions/httpExceptions";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from './apartment.validation'
import authenticate from "@/middleware/authenticate.middleware";


import reviewController from '@/resources/review/review.controller'

class ApartmentController implements Controller {
    public path = '/apartments'
    public router = Router()
    private ApartmentService = new ApartmentService()

    private reviewRouter = new reviewController().router

    constructor(){
        this.initializeRouter()
    }

    private initializeRouter(){

        this.router.get(`${this.path}/me`, authenticate, this.getMyApartments)

        this.router.route(`${this.path}`)
        .post(authenticate, validationMiddleware(validate.create), this.create)
        .get(this.getApartments)


        this.router.route(`${this.path}/:id`)
        .get(this.getApartment)
        .patch(authenticate, this.updateApartment)
        .delete(authenticate, this.deleteApartment)

        this.router.use(`${this.path}/:apartment_id/reviews`, this.reviewRouter)
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
            const apartments = await this.ApartmentService.getAll({}, req.query)

            res.status(200).json({
                status: 'success',
                result: (apartments as any).length,
                apartments,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

    private getMyApartments = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const apartments = await this.ApartmentService.getAll({user: req.user.id}, req.query)

            res.status(200).json({
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

            res.status(200).json({
                status: 'success',
                apartment,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

    private updateApartment = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const apartment = await this.ApartmentService.update(req.params.id, req.user.id, req.body)

            res.status(200).json({
                status: 'success',
                apartment,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

    private deleteApartment = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const apartment = await this.ApartmentService.delete(req.params.id, req.user.id, req.body)

            res.status(204).json({
                status: 'success',
                apartment,
            })
        } catch (error:any) {
           next(new HttpException(error.message, error.statusCode))
        }
    }

}

export default ApartmentController