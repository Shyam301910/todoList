const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const TodoModel=require('./models/todo');

const app=express();
app.use(cors());
app.use(express.json());

//mongo DB connect
mongoose.connect('mongodb+srv://admin:admin1234@todocluster.sxcb2.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster')
.then(res=>console.log("Connected successfully"))
.catch(err=>console.log(err))

app.listen(5000,()=>{ 
    console.log('Server is running on port 5000');
});

app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    const r=TodoModel.findByIdAndUpdate(id, { done: true }, { new: true })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const r=TodoModel.findByIdAndDelete(id)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
