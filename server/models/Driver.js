import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({

name:String,

mobile:String,

licenseNo:String,

vehicleNo:String,

status:{
type:String,
default:"Available"
}

},{
timestamps:true
});

export default mongoose.model("Driver",DriverSchema);
