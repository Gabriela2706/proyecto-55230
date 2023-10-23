import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  purchaseDateTime: {
    type: Number,
    require: true,
  },
  amount: { Number }, //Aca deberia referenciar el cart con sus montos sumados.
  purchaser: {
    type: String,
    require: true,
  },
});

const ticketModel = mongoose.model("ticket", ticketSchema);

export default ticketModel;
