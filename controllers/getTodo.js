const Todo=require('../model/todo');
//define route handler
exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'entire todo data is fetched'
            }
        );
    }
        catch(err){
            console.error(err);
            console.log(err);
            res.status(500).json({
                success:false,
                message:'server error',
                error:err.message
            })

        }
};
exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById( {_id: id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo data ${id} successfully fetched`,
        })
        
    }
        catch(err){
            console.error(err);
            console.log(err);
            res.status(500).json({
                success:false,
                message:'server error',
                error:err.message
            })

        }
};