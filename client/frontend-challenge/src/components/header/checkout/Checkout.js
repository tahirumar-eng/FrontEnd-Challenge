import React from "react";
import "./Checkout.css";
const Checkout = ({ cart, onDelete }) => {
  const itemTotal = (c) => {
    return c.price * c.quantity;
  };
  const subTotal = () => {
    return cart.reduce((total, c) => total + c.price * c.quantity, 0);
  };

  return (
    <div className="container">
      {cart.length === 0 ? (
        <h4 className="cartEmpty-heading">
          your cart is empty please continue shopping
        </h4>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product </th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <tr key={c.id}>
                <th scope="row">
                  <img
                    src={
                      c.img
                        ? `http://localhost:3000/${c.img}`
                        : "https://i.gadgets360cdn.com/large/canon_eos_r5_image_1594366986226.jpg?downsize=950:*&output-quality=80"
                    }
                    className="checkout-image"
                  ></img>
                </th>
                <td>{c.name}</td>
                <td>{c.price}</td>
                <td>{c.quantity}</td>
                <td>{itemTotal(c)}</td>

                <td>
                  <img
                    src="./delete.png"
                    className="delete-image"
                    onClick={() => onDelete(c)}
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 ? (
        <div className="sub-total">
          <p className="para">
            Sub Total : <span>{subTotal()}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default Checkout;
