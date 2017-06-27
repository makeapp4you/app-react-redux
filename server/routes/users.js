import express from 'express';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

router.post('/', (req, res)=>{
    console.log(req.body);
});

export default router;