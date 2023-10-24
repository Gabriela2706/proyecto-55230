import TicketDao from "../dao/mongo/ticketDB.js";
const ticketDao = new TicketDao();
import { getCartDetail, updateCart } from "./cartService.js";

export const getTicketByCode = async (code) => {
  try {
    // esta logica deberia traer un ticket por su codigo autogenerado
    const ticket = await ticketDao.findOne(code);
    if (!ticket) return await ticketDao.find();
    return ticket;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const createNewTicket = async () => {
  try {
    //paso 1 - traer el carrito con el id
    const cartId = await getCartDetail("65381071ad9b6a97690974da");

    //paso 2 - verificar stock y devolver un array con los productos sin stock
    //funcion para filtrar los que no tienen stock
    const sinStock = cartId.products.filter(
      (producto) => producto.product.stock <= 0
    );
    //funcion para filtrar los que si tienen stock y continuan a compra
    const conStock = cartId.product.filter(
      (producto) => producto.product.stock > 0
    );

    //paso 3 - guardar los productos que no tienen stock en el mismo carrito
    const productosSinStock = await updateCart(sinStock, cartId);

    return productosSinStock;

    //paso 4 - generar el ticket
    // ticket.code = "A_001";
    // const newTicket = [ticket.code++, conStock];
    // return newTicket;
  } catch (e) {
    console.log(e);
    return e;
  }
};
