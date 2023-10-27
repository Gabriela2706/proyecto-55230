import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  product: [],
  purchaseDateTime: {
    type: Date,
    require: true,
  },
  amount: { Number }, //Aca deberia referenciar el cart con sus montos sumados?
  purchaser: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
});

const ticketModel = mongoose.model("ticket", ticketSchema);

export default ticketModel;
