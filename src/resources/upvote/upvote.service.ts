import upvoteModel from "./upvote.model";
import Upvote from "./upvote.interface";
import HttpException from "@/utils/exceptions/httpExceptions";


class UpvoteService {
    private UpvoteModel = upvoteModel



    /**
     * 
     * @param data - details of the upvoter
     * @returns newly created details of upvoter
     */
    public async create (data: Upvote): Promise<Upvote | Error> {
        try {
            const upvote = await this.UpvoteModel.create(data)

            return upvote
        } catch (error:any) {
            throw new Error(error)
        }
    }
   
}

export default UpvoteService