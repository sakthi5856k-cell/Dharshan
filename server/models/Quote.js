import mongoose from "mongoose";

const QuoteSchema=new mongoose.Schema({

name:String,

mobile:String,

pickup:String,

destination:String,

service:String,

moveDate:String,

goods:String,

estimatedPrice:Number

},{
timestamps:true
});

export default mongoose.model(

"Quote",

QuoteSchema

);
