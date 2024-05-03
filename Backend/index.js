const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const Bike=require("./bikemodel")
const cors = require('cors');
const Testdrive = require("./testdrive.model");
const User=require("./user.model")
require('dotenv').config()
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))
app.get("/", async(req, res) => {
    let data=await Bike.find({})
    res.json(data)
})
app.get("/bikes", async(req, res) => {
    let data=await Bike.find({})
    const groupedBikes = data.reduce((acc, bike) => {
        const existingGroup = acc.find(group => group.type === bike.type);
        if (existingGroup) {
          existingGroup.bikes.push(bike);
        } else {
          acc.push({ type: bike.type, bikes: [bike] });
        }
        return acc;
      }, []);
      
      console.log(groupedBikes);
    res.json(groupedBikes)
})

app.post("/testdrive", async(req, res) => {
  let obj=req.body
  try {
    let newTestdrive=new Testdrive(obj)
    await newTestdrive.save()
    res.json({status:true})
  } catch (error) {
    res.json({status:false})
    
  }
})
app.post("/signup", async(req, res) => {
  let obj=req.body
  try {
    let newuser=new User(obj)
    console.log(newuser)
    await newuser.save()
    res.json({status:true})
  } catch (error) {
    res.json({status:false,msg:error})
    
  }
})

app.post("/login", async(req, res) => {
  let obj=req.body
  try {
    console.log(obj)
    let user= await User.findOne({email:obj.email,password:obj.password})
    console.log(user)
    if(user) res.json({status:true,user:user})
    else 
  res.json({status:false,msg:"user not found"})
  } catch (error) {
    res.json({status:false,msg:"internal server error"})
    
  }
})
app.post("/getBike", async(req, res) => {
  let obj=req.body
  try {
    console.log(obj)
    let bike= await Bike.findOne({_id:obj._id})
    console.log(bike)
    if(bike) res.json({status:true,bike:bike})
    else 
  res.json({status:false,msg:"bike not found"})
  } catch (error) {
    res.json({status:false,msg:"internal server error"})
    
  }
})


function db() {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        app.listen(3000, () => {
            console.log("Mongo Connected");
        })
    })
}
db()