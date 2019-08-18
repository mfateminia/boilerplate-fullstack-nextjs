import {Request, Response} from 'express';
const express = require('express');
const router = express.Router();

router.use((_: Request, res: Response) => {
    res.send('Done!!')
});

module.exports = router;