import * as ticketService from "../services/ticketService.js";

export const GETTickerByCode = async (req, res) => {
  try {
    const ticket = await ticketService.getTicketByCode(code);
    res.status(200).send({ error: false, ticket });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};

export const POSTNewTicket = async (req, res) => {
  try {
    //Aca se crea un nuevo ticket. De donde toma los datos?
    const { ticket } = req.body;
    const newTicket = await ticketService.createNewTicket(ticket);
    res.status(200).send({ error: false, newTicket });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};
