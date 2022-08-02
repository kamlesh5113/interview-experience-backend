const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const connect = require('./db');

const userRouter = require('./UserRouter/UserRouter.js');
const interviewRouter = require('./InterviewRouter/InterviewRouter.js');


app.use(cors());

app.use(bodyParser.json());

connect();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use(express.static(path.join('public')));

app.use('/api/user',userRouter);
app.use('/api/interview',interviewRouter);


app.use((error,req,res,next) =>{                        // to catch error from upper middleware.....
     res.status(error.code || 500);
     res.json({message:error.message || "Unkown error"});
  });


app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log("Connected to server");
})