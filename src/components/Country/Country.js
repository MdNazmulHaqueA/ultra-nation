import React from "react";
import "./Country.css";
const Country = (props) => {
    const {name, population, region, flag} = props.country;
  return (
    <div>
      {/* <h3>{props.cNames}</h3>*/}
      {/* <h4>{props.country.name}</h4>
      <h5>Population: {props.country.population}</h5>
      <p>
        <small>Region: {props.country.region}</small>
      </p> */}
      <h4>{name} <img src={flag} alt="" height="10px"/></h4>
      <h5>Population: {population}</h5>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
