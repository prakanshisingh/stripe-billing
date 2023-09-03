const mongoose=require ('mongoose');
const userPlan=new mongoose.Schema({
    planTime:{
        type:String,
        required:true
    },
    planCategory:{
        type:String,
        required:true
    },
})
const Plan=mongoose.model('PLAN',userPlan)
module.exports=Plan;