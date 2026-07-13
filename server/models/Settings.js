import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({

companyName:String,

phone:String,

email:String,

address:String,

whatsapp:String,

googleMap:String

});

export default mongoose.model(
"Settings",
SettingsSchema
);
