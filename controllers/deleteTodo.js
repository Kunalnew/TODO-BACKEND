const todo=require('../model/todo');
const { getTodoById } = require('./getTodo');
//define route handler
exports.deleteTodo=async(req,res)=>{
    try{
       const {id}=req.params;
       await todo.findByIdAndDelete(id);
       res.json({
        success:true,
        message:'todo deleted',
       })
    }
    catch(err){
            console.error(err);
            res.status(500).json({
                success:false,
                message:'server error',
                error:err.message,
            })

    }
};