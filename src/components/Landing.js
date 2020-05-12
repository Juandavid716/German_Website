import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Deutsch lernen </h1>
        <h4 className="hero-text">
          Willkommen auf unserer Website, auf der deutsche Sprache besser lernen
          und vertiefen können!
        </h4>
      </section>

      <section className="landing-container">
        <h2>Sektionen</h2>
        <p>Dies sind einige Sektionen, Sie besuchen können</p>
        <article className="cards-container">
          <div>
            <Link to="/verben" className="card-link">
              <h3 className="card-title">Verben</h3>
              <p>
                Modalverben, trenkare und untrenkare Verben, unregelmäßiges und
                regelmäßiges Verben.
              </p>
            </Link>
          </div>
          <div>
            <Link to="/sustantive" className="card-link">
              <h3 className="card-title">Sustantive</h3>
              <p>¿Das, Die oder Der? Kein problem!</p>
            </Link>
          </div>
          <div>
            <Link to="/adjektive" className="card-link">
              <h3 className="card-title">Adjektive</h3>
              <p> Eigenschaften von Objekten</p>
            </Link>
          </div>
        </article>
        <div className="slider"></div>
      </section>
    </>
  );
}

export default Landing;
