import ticketModel from "../../schemas/ticketSchema.js";

export default class TicketDao {
  constructor() {}

  find = async () => {
    try {
      const tickets = await ticketModel.find();
      return tickets;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  findOne = async (code) => {
    try {
      const oneTicket = await ticketModel.findOne(code);
      return oneTicket;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  create = async (ticket) => {
    try {
      const newTicket = await ticketModel.create(ticket);
      return newTicket;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  update = async (update) => {
    try {
      const updatePropertiesOfTicket = await ticketModel.findOneAndUpdate(
        update
      );
      return updatePropertiesOfTicket;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  delete = async (code) => {
    try {
      const deleteTicket = await ticketModel.findOneAndDelete(code);
      return deleteTicket;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}
