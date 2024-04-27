const todo=require('../model/todo');
//define route handler
exports.createTodo=async(req,res)=>{
    try{
        const{title,description}=req.body;
        const response=await todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'entry created'
            }
        );
    }
        catch(err){
            console.error(err);
            console.log(err);
            res.status(500).json({
                success:false,
                data:'internal server error',
                message:err.message
            })

        }
};