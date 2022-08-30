import React from "react";

import "./cards.css";
import LocationIcon from "../../assets/location.png";

function Cards(props) {
  return (
    <div className="card">
      <div className="card-content">
        <img
          className="journal-image"
          src={props.itemCard.image}
          alt={props.itemCard.imgDesc}
        />
        <div className="journal-description">
          <div className="location-content">
            <div className="location-desc">
              <img
                className="location-icon"
                src={LocationIcon}
                alt="location-icon"
              />
              <span className="location-name">{props.itemCard.location}</span>
            </div>
            <span className="location-map">
              <a
                target="_blank"
                rel="noreferrer"
                href={props.itemCard.googleMap}
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h1 className="journal-title">{props.itemCard.title}</h1>
          <div className="description">
            <p className="desc-date">{props.itemCard.travelDate}</p>
            <p className="desc-long">{props.itemCard.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
