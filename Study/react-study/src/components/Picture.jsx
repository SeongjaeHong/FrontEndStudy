import React from "react";

export default function Picture({ image }) {
  return (
    <div className="pictureContainer">
      <img
        className="picture"
        src={image}
        alt="avatar"></img>
    </div>
  );
}
