export default class CartDao {
  constructor() {
    this.cart = [];
  }

  //CRUD
  find() {
    return this.cart;
  }

  findOne(cartid) {
    return this.cart.find((cart) => cart.id) == cartid;
  }

  create(cart) {
    this.cart.push({ ...cart, id: this.cart.length + 1 });
    return this.cart[this.cart.length - 1];
  }

  update(data) {
    //Revisar si esta bien la logica
    return this.cart.push(...this.cart, data);
  }

  delete(cart) {
    //revisar si esta bien la logica
    return this.cart.reduce(cart);
  }
}
