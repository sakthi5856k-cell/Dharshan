import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    pickup: String,
    destination: String,
    service: String,
    moveDate: String,
    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Booking", BookingSchema);
