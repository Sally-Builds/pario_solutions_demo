import apartmentModel from "./apartment.model";
import Apartment from "./apartment.interface";
import HttpException from "@/utils/exceptions/httpExceptions";


class ApartmentService {
    private ApartmentModel = apartmentModel


    /**
     * 
     * @param data - uapartment details
     * @returns - newly created apartment
     */
    public async create (data: Apartment): Promise<Apartment | Error> {
        try {
            const apartment = await this.ApartmentModel.create(data)

            return apartment
        } catch (error:any) {
            throw new Error(error)
        }
    }
   
    public async getAll (): Promise<Apartment[] | Error> {
        try {
            const apartments = await this.ApartmentModel.find()

            return apartments
        } catch (error:any) {
            throw new Error(error)
        }
    }

    public async get (id: string): Promise<Apartment | Error> {
        try {
            const apartment = await this.ApartmentModel.findById(id)

            if(!apartment) throw new Error('apartment not found') 

            return apartment
        } catch (error:any) {
            throw new Error(error)
        }
    }

    /**
     * 
     * @param data - apartment details to update
     * @param id - apartment id to update
     * @returns - updated apartment details
     */
    public async update(data:Apartment, id:string): Promise<Apartment | Error> {
        try {
            const apartment = await this.ApartmentModel.findByIdAndUpdate(id, data, {runValidators: true, new: true})

            if(!apartment) {
                throw new Error("No user found");
                
            }

            return apartment
        } catch (error:any) {
            throw new Error(error)
        }
    }
}

export default ApartmentService