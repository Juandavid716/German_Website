import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Dolorem ipsum non </h1>
        <h4 className="hero-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          sed facere porro. Sint, laborum est! Ullam, porro, quidem mollitia,
          consequatur tempore beatae earum consectetur
        </h4>
      </section>

      <section className="landing-container">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aliquid cum perferendis eum quod culpa repellendus beatae ipsam at
          consequatur.
        </p>
        <article className="cards-container">
          <div>
            <Link to="/verben" className="card-link">
              <h3 className="card-title">Verben</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </Link>
          </div>
          <div>
            <Link to="/sustantive" className="card-link">
              <h3 className="card-title">Sustantive</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </Link>
          </div>
          <div>
            <Link to="/adjektive" className="card-link">
              <h3 className="card-title">Adjektive</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

export default Landing;
