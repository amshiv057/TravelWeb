import React from "react";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />;<section className="card-list">{cards}</section>
    </div>
  );
}
