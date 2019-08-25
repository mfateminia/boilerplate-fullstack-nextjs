import { Request, Response, NextFunction } from "express";

export const getTestController = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('entered getTestController with this path:', req.path);
        res.send({status: 'success'});
    } catch (error) {
        next(error)
    }
}

export const postTestController = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('entered postTestController with this path:', req.path);
        res.send({status: 'success'});
    } catch (error) {
        next(error)
    }
}