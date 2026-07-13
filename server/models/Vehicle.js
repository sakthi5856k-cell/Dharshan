import mongoose from "mongoose";

const VehicleSchema=new mongoose.Schema({

vehicleNo:String,

driver:String,

vehicleType:String,

status:{

type:String,

default:"Available"

}

},
{

timestamps:true

});

export default mongoose.model(

"Vehicle",

VehicleSchema

);
