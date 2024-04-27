const todo=require('../model/todo');
//define route handler
exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        const todo=await todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAT:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:'updated successfully',
        })
      
    }
        catch(err){
            console.error(err);
            res.status(500).json({
                success:false,
                message:'server error',
                error:err.message
            })
        }
};