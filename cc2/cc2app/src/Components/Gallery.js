import React from "react";
import "./gallery.css";
const Gallery = () => {
  return (
    <section className="sectiong">
      <h1>Nom Nom Gallery</h1>
      <div className="flex">
        {/* Your gallery items go here */}
        <div className="item">
          <div className="item__details">jelly-o brownie sweet</div>
        </div>
        <div className="item item--large">
          <div className="item__details">Muffin jelly gingerbread</div>
        </div>
        <div className="item">
          <div className="item__details">jelly-o brownie sweet</div>
        </div>
        <div className="item item--large">
          <div className="item__details">Muffin jelly gingerbread</div>
        </div>
        <div className="item">
          <div className="item__details">jelly-o brownie sweet</div>
        </div>
        <div className="item item--large">
          <div className="item__details">Muffin jelly gingerbread</div>
        </div>
        <div className="item">
          <div className="item__details">jelly-o brownie sweet</div>
        </div>
        <div className="item item--large">
          <div className="item__details">Muffin jelly gingerbread</div>
        </div>
        {/* Add more items as needed */}
      </div>
    </section>
  );
};

export default Gallery;
