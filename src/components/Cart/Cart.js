import React from "react";

const Cart = (props) => {
  const cart = props.cart;
//   let totalPopulation = 0;
//   for (let i = 0; i < cart.length; i++) {
//     const element = cart[i];
//     totalPopulation = totalPopulation + element.population;
//   }
const totalPopulation = cart.reduce((sum,country) => sum + country.population, 0);
  return (
    <div>
      <h2>This is cart: {cart.length}</h2>
      <h5>Total Population {totalPopulation}</h5>
    </div>
  );
};

export default Cart;
