const mongoose = require("mongoose");
const { SeatSchema } = require("./seat.model");

const TripSchema = new mongoose.Schema({
  fromStationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Station",
  },
  toStationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Station",
  },
  startTime: {
    type: Date,
    required: true,
  },
  //seats
  seats: [SeatSchema],
  price: { type: Number, default: 0 },
});

const Trip = mongoose.model("Trip", TripSchema, "Trip");

module.exports = {
  TripSchema,
  Trip,
};
