import React from "react";
import Picture from "./Picture";

export default function Profile({ image, name, title, isNew=false }) {
  return (
    <div className="album">
        {isNew && <span className="newPicture">New</span>}
      <Picture
        image={image}
        isNew={isNew}
      />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
