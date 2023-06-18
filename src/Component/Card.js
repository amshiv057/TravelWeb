import React from "react";

export default function Card(props) {
  return (
    <div className="Place">
      <img src={`${props.item.img}`} className="Place--img"></img>
      <div className="Place--stats">
        <div className="Loc--stats">
          <img src="location.jpg" className="loction--logo"></img>
          <p className="loc-plc">{props.item.Location}</p>
          <a href={`${props.item.Venu}`} className="link">
            View on Google Map.
          </a>
        </div>
        <h1 className="Loc--title">{props.item.title}</h1>
        <h5 className="date">{props.item.date}</h5>
        <p className="about">{props.item.about}</p>
      </div>
    </div>
  );
}
