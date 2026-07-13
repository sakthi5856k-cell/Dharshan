import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({

name:String,

mobile:String,

message:String

},
{
timestamps:true
});

export default mongoose.model("Contact",ContactSchema);
