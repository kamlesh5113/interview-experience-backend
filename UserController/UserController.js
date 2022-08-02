const { user }  = require('../Model/Model.js');
const bcrpt = require('bcryptjs');


const postData = async(req,res)=>{

    const {name,email,password} = req.body;
    let exist;
    try{
        exist = await user.findOne({email: email});
    }catch(err){
        res.send(false);
    }
    if(exist)
    {
        console.log("Email Alerdy exist");
        res.send(false);
    }
    else{
    let newPassword;
    try{
        newPassword = await bcrpt.hash(password,12);
    }catch(err){
        res.send(false);
    }

    const newUser = new user({
        name:req.body.name,
        email:req.body.email,
        password:newPassword
    });
    try{
        await newUser.save();
        console.log("Signed in Successfull");
        res.send(true);
    }catch(err){
        res.send(false);
    }
}
};

const getdata = async(req,res) =>{

    const {email, password} = req.body;
    let exist;
    try{
        exist = await user.findOne({ email: email });
    }catch(err){
        res.send(err);
    }
    if(exist)
    {
        let valid = false;
        try{
            valid = await bcrpt.compare( password, exist.password );
        }catch(err){
            valid = false;
        }
        if(valid)
        {
            res.json({id: exist._id,name: exist.name});
        }
        else
        {
            res.send(false);
        }
    }
    else
    {
        res.send(false);
    }

};

const getbyid= async(req,res)=>{
    const id = req.params.id;
    try{
        const use = await user.findById(id);
        
        res.json(use);

    }catch(err){
        res.send(err);
    }
};
const getBYEmail = async(req,res)=>{
    const email = req.params.id;

    try{
        const use = await user.findOne({ email: email  });
        if(use)
        {
            res.json( {id: use._id} );
        }
        else
        {
            res.send(false);
        }
    }catch(err){
        res.send(err);
    }
}

const updatePassword = async(req,res)=>{
    const Id = req.params.id;
    const {password} = req.body
    let hased;
    try{
        hased = await bcrpt.hash(password, 12);
    }catch(err){
        return res.send(false);
    }
    const dat={password : hased}
    try{
        const use = await user.findByIdAndUpdate(Id, dat);
        if(use)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }catch(err)
    {
        res.send(err);
    }
}



module.exports = {postData, getdata, getbyid, getBYEmail, updatePassword };