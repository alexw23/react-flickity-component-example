import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

function Carousel() {
  return (
    <Flickity>
      <img
        style={{ marginLeft: 5, marginRight: 5 }}
        src="https://placeimg.com/640/480/animals"
      />
      <img
        style={{ marginLeft: 5, marginRight: 5 }}
        src="https://placeimg.com/640/480/animals"
      />
    </Flickity>
  );
}

export default function Home() {
  return (
    <div>
      <h1>React Flickity</h1>
      <Carousel />
    </div>
  );
}
