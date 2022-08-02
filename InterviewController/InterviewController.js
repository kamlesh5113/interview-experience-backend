const { inter, user } = require('../Model/Model.js');


const postInterview = async(req,res) =>{

    const postData = new inter({
        uid:req.body.uid,
        title:req.body.title,
        company:req.body.company,
        experience:req.body.experience
    });

    try{
        await postData.save();
        res.send(true);
    }catch(err){
        res.send(err);
    } 

}
const getInterview = async(req,res) =>{
try{
    const interview = await inter.find();
    res.json(interview);
    
}catch(err)
{
    res.send(err);
}
}

const getInterviewbyId = async(req,res) =>{
    const id = req.params.id;
    
    try{
        const interview = await inter.find({uid:id});
        res.json(interview);
    }catch(err)
    {
        res.send(err);
    }
    };

    const getInterviewbyName = async(req,res) =>{
        const id = req.params.id;
        
        try{
            const interview = await inter.find({company:id});
            res.json(interview);
        }catch(err)
        {
            res.send(err);
        }
        };

    const getInterviewbyinterviewid = async(req,res)=>{
        const id = req.params.id;
       
        try{
            const inter1 = await inter.findById(id);
            
           
            res.send(inter1);

        }catch(err){
            res.send(err);
        }
    }

    const delte = async(req,res)=>{
        const id = req.params.id;
        try{
            await inter.findByIdAndDelete(id);
            res.send(true);
        }catch(err){
            res.send(err);
        }
    };

    


module.exports = { postInterview, getInterview, getInterviewbyId,getInterviewbyinterviewid, delte, getInterviewbyName };