import TicketDao from "../dao/mongo/ticketDB.js";
const ticketDao = new TicketDao();

export const getTicketByCode = async () => {
  try {
    // esta logica deberia traer un ticket por su codigo autogenerado
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const createNewTicket = async (ticket) => {
  try {
    ticket.code = "A_01";
    // esta logica deberia crear un nuevo ticket
    ticket.code.push({ ...ticket, code: ticket.code.length + 1 });
    return ticket.code[ticket.code.length - 1];
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const incompletePurchase = async () => {
  try {
    // esta logica va a separar los productos que tienen stock, de los que no.
    //los que no tienen stock los va  a devolver en un nuevo array y van a quedar en el carrito.
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const finalizePurchase = async () => {
  try {
    //Esta logica deberia sumar los totales de los id dentro del carrito
  } catch (e) {
    console.log(e);
    return e;
  }
};
