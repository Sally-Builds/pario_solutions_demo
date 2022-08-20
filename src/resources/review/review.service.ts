import reviewModel from "./review.model";
import Review from "./review.interface";
import HttpException from "@/utils/exceptions/httpExceptions";


class ReviewService {
    private ReviewModel = reviewModel


    /**
     * 
     * @param data - review details
     * @returns - newly created review
     */
    public async create (data: Review): Promise<Review | Error> {
        try {
            const review = await this.ReviewModel.create(data)

            return review
        } catch (error:any) {
            throw new Error(error)
        }
    }
   
}

export default ReviewService