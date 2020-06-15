import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ConfectionItem = ({ item }) => {
  return (
    <div class="column is-one-half-tablet is-one-quarter-desktop">
      <div class="pattern-diagonal-stripes-sm has-background-primary-light has-text-primary my-2 mx-2">
        <PreviewCompatibleImage
          imageInfo={item}
          style={{ transform: "translate(1rem, -0.75rem)" }}
        />
      </div>
      <h4 className="pt-4">{item.name}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default ConfectionItem;
