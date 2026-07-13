import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({

title:String,

image:String,

description:String

},
{
timestamps:true
});

export default mongoose.model("Gallery",GallerySchema);
