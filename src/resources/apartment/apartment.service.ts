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
   
    public async getAll (data: any): Promise<Apartment[] | Error> {
        try {
            console.log(data)
            const apartments = await this.ApartmentModel.find(data)

            return apartments
        } catch (error:any) {
            throw new Error(error)
        }
    }

    public async get (id: string): Promise<Apartment | Error> {
        try {
            const apartment = await this.ApartmentModel.findById(id).populate('review')

            if(!apartment) throw new Error('Not found') 

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
    public async update(id:string, user_id: string, data:Apartment): Promise<Apartment | Error> {
        try {
            console.log(id, user_id)
            const apartment = await this.ApartmentModel.findOneAndUpdate({_id: id, user: user_id}, data, {runValidators: true, new: true})

            if(!apartment) {
                throw new Error("Not found");
                
            }

            return apartment
        } catch (error:any) {
            throw new Error(error)
        }
    }

    /**
     * 
     * @param id - apartment id to update
     * @param user_id - users id
     * @returns - deleted apartment details
     */
     public async delete(id:string, user_id: string, data:Apartment): Promise<Apartment | Error> {
        try {
            const apartment = await this.ApartmentModel.findOneAndDelete({_id: id, user: user_id}).exec()

            if(!apartment) {
                throw new Error("Not found");
                
            }

            return apartment
        } catch (error:any) {
            throw new Error(error)
        }
    }
}

export default ApartmentService