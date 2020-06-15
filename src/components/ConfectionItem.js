import React from "react";

const ConfectionItem = ({ name, description, src }) => {
  return (
    <div class="column is-one-half-tablet is-one-quarter-desktop">
      <div class="pattern-diagonal-stripes-sm has-background-primary-light has-text-primary my-2 mx-2">
        <img src={src} style={{ transform: "translate(1rem, -0.75rem)" }} />
      </div>
      <h4 className="pt-4">{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ConfectionItem;
