import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
{
    invoiceNo:{
        type:String,
        unique:true
    },

    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },

    customerName:String,

    mobile:String,

    pickup:String,

    destination:String,

    amount:Number,

    paymentStatus:{
        type:String,
        default:"Pending"
    }

},
{
    timestamps:true
}
);

export default mongoose.model("Invoice",InvoiceSchema);
