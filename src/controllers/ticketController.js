import * as ticketService from "../services/ticketService.js";

export const GETTickerByCode = async (req, res) => {
  try {
    const ticket = await ticketService.getTicketByCode(code);
    res.send({ error: false, ticket });
  } catch (e) {
    res.status(404).send({ error: true, msg: e.message });
  }
};

export const POSTNewTicket = async (req, res) => {
  try {
    //Aca se crea un nuevo ticket. De donde toma los datos?
    const { ticket } = req.body;
    const newTicket = await ticketService.createNewTicket(ticket);
    res.send({ error: false, newTicket });
  } catch (e) {
    res.status(404).send({ error: true, msg: e.message });
  }
};

export const POSTIncompletePurchase = async (req, res) => {
  try {
    //Aca se genera levanta la informacion de los productos que no tenian stock.
    //se llama por un lado al incompletePurchase del service para que quede el array con los productos sin stock.
  } catch (e) {
    res.status(404).send({ error: true, msg: e.message });
  }
};

export const POSTFinalizePurchase = async () => {
  try {
    const finalizePurchase = await ticketService.finalizePurchase();
    res.send({ error: false, finalizePurchase });
  } catch (e) {
    res.status(404).send({ error: true, msg: e.message });
  }
};
