import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';

// controller imports below
import UserController from '@/resources/user/user.controller';
import ApartmentController from '@/resources/apartment/apartment.controller'
import ReviewController from '@/resources/review/review.controller'
import UpvoteController from '@/resources/upvote/upvote.controller'

validateEnv();

const app = new App(
    [
        new UserController(),
        new ApartmentController(),
        new UpvoteController(),
        new ReviewController(),
    ],
    Number(process.env.PORT)
);

app.listen();
