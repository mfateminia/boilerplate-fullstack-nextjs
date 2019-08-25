import {Router} from 'express';
import { getTestController, postTestController } from './controller';

export const TestRouter = (router: Router) => {
    router
        .get('/v1/test', getTestController)
        .post('/v1/test', postTestController);
}