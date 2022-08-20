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
            let check:any
            if(data.user) {
                check = await this.UpvoteModel.findOne({user: data.user})
                
            }else {
                check = await (this as any).UpvoteModel.findOne(data)
            }

            if(check) {
                throw new Error("you've already reacted to this review");
            }
            const upvote = await this.UpvoteModel.create(data)

            return upvote
        } catch (error:any) {
            throw new Error(error)
        }
    }
   
}

export default UpvoteService