const express = require('express');
const bcrypt = require("bcryptjs");
const router = express.Router()
const jwt= require ("jsonwebtoken");

require("../db/conn");

const User = require('../model/userSchema')

// router.get('/', (req, res) => {
//     res.send('Hello from server')
// })

// router.post('/register',  (req, res) => {
//     const { name, email, password } = req.body;

//     // console.log(req.body);
//     if (!name || !email || !password) {
//         return res.status(422).json({ error: "PLz fill the field property" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exist" });
//             }
//             const user = new User({ name, email, password });

//             user.save().then(() => {
//                 res.status(201).json({ message: "User registered Successfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }));
//         }).catch(err =>{console.log(err);})
// });



router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: "PLz fill the field property" })
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered Successfully" });
    } catch (err) {
        console.log(err);
    }
});


// login route

router.post("/login", async (req, res) => {
    // console.log(req.body)
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token= await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+ 258920000000),
                httpOnly:true
            })

            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials " })
            } else {
                res.json({ message: "User Login Successful" })
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials " })
        }


    } catch (error) {
        console.log(error);
    }
})



// const Plan = require('../model/userSchema')

// router.post("/plan",async (req, res) => {
//     const { planTime,planCategory } = req.body;
// })


module.exports = router;