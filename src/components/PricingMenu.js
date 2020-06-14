import React from "react";

const PricingMenuItem = ({ category, items }) => {
  return (
    <div class="column is-one-thirds">
      <h3 className="has-text-primary-dark">{category}</h3>
      {items.map((item) => (
        <div className="level is-mobile" key={item.name}>
          <div className="level-left">{item.name}</div>
          <div className="level-right has-text-weight-bold">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default PricingMenuItem;
