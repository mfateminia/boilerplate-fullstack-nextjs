import express from 'express';
import { TestRouter } from './modules/test/router';

export const router = express.Router();

TestRouter(router);
