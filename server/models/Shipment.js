import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema(
{
    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },

    currentLocation:String,

    destination:String,

    driver:String,

    vehicleNo:String,

    status:{
        type:String,
        default:"Pending"
    },

    latitude:Number,

    longitude:Number

},
{
    timestamps:true
}
);

export default mongoose.model("Shipment",ShipmentSchema);
