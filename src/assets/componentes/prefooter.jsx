import React from "react";
import "./prefooters.css"

const PreFooter = () => {
  return (
    <div className="prefooter">

      <div className="sponsors-section">
        <p className="title">Principales patrocinadores del Club</p>

        <div className="sponsors">
          <img
            src="./images/nike-logo.png"
            alt="Nike"
            className="sponsor-logo"
          />

          <img
            src="/images/spotify.png"
            alt="Spotify"
            className="sponsor-logo"
          />

          <img
            src="/images/philips.png"
            alt="Philips Ambilight"
            className="sponsor-logo"
          />
        </div>

        <button className="sponsors-btn">
          MOSTRAR TODOS LOS PATROCINADORES
        </button>
      </div>

      <div className="social-section">
        <p className="title">Sigue al Barça en las redes sociales</p>

        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-spotify"></i>
          <i className="fab fa-discord"></i>
          <i className="fab fa-tiktok"></i>
        </div>
      </div>

    </div>
  );
};

export default PreFooter;