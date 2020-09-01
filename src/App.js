import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        // const names = data.map(country => country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    // console.log("Added",country);
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h2>Country Addeded: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {/* <ul> 
          {countries.map(country => <li>{country.name}</li>)}
      </ul> */}
      {/* {countries.map(country => <Country cNames = {country.name}></Country>)} */}
      {countries.map((country) => (
        <Country
          country={country}
          key={country.name}
          addCountry={handleAddCountry}
        ></Country>
      ))}
      {/* key is used to remove an warning in the console */}

      <header className="App-header"></header>
    </div>
  );
}

export default App;
