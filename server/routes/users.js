import express from 'express';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res)=>{
    // console.log(req.body);
    const { errors, isValid } = validateInput(req.body);
    console.log(errors, isValid);
    if(isValid) {
        // res.json({ success: true }); 
        // var username="phat"; 
        // var password="123"; 
        // var timezone="hcm"; 
        // var email ="abc@gmail.com";
        const { username, password, timezone, email } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);
        
        User.forge({
            username,email, timezone, password_digest
        }, {hasTimestamps: true}).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({error: err}));
    } 
    else{
        res.status(400).json(errors);
    }
});
export default router;