import React from "react";

const PricingMenuItem = ({ category, items = [] }) => {
  return (
    <div className="column is-half-tablet is-half-desktop is-one-third-widescreen">
      <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary-light"></div>
      <div
        className="has-background-primary-light py-4 px-5"
        style={{ height: "calc(100% - 2rem)" }}
      >
        <h3 className="has-text-primary-dark">{category}</h3>
        {items.map((item) => (
          <div className="level is-mobile" key={item.name}>
            <div className="level-left">{item.name}</div>
            <div className="level-right has-text-weight-bold">{item.price}</div>
          </div>
        ))}
      </div>
      <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary-light"></div>
    </div>
  );
};

export default PricingMenuItem;
