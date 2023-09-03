const dotenv=require ("dotenv");
const mongoose=require ("mongoose");
const express= require ("express");
const app=express();
const bodyParser = require("body-parser");
const path=require ("path");
dotenv.config({path:'./config.env'})



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true}));
require('./db/conn')

const User=require('./model/userSchema');

app.use(express.json());

// app.post('/register', async (req, res) => {
//     //console.log("post reached");
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(422).json({ error: "PLz fill the field property" })
//     }
//     try {
//         const userExist = await User.findOne({ email: email })

//         if (userExist) {
//             return res.status(422).json({ error: "Email already exist" });
//         }
//         const user = new User({ name, email, password });
//         await user.save();
//         res.status(201).json({ error: "User registered Successfully" });
//     } catch (err) {
//         console.log(err);
//     }
// });






app.use(require('./router/auth'));
// we link the router file to make our routes easy


const PORT=process.env.PORT;


app.get('/',(req,res) =>{
    // res.send("hello");
    app.use(express.static(path.resolve(__dirname,'../client','build')));
    res.sendFile(path.resolve(__dirname,'../client','build','index.html'));
});
// console.log("hii");
app.listen(PORT,() =>{
    console.log(`server is running at port ${PORT}`)
})