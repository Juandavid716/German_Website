import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "reactfire";
function Landing() {
  const user = useUser();
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
              <h3 className="card-title">Substantive</h3>
              <p>¿Das, Die oder Der? Kein problem!</p>
            </Link>
          </div>
          <div>
            <Link to="/adjektive" className="card-link">
              <h3 className="card-title">Adjektive</h3>
              <p> Eigenschaften von Objekten</p>
            </Link>
          </div>
          {user && (
            <div>
              <Link to="/addword" className="card-link">
                <h3 className="card-title">Add formulario</h3>
                <p> añadir palabras</p>
              </Link>
            </div>
          )}
        </article>
        <div className="slider"></div>
        <div className="info-contact"> Erstellt von: </div>
        <div className="git-father">
          <div className="git-button-1">
            <a
              className="github-button"
              href="https://github.com/juandavid716"
              aria-label="Follow @juandavid716 on GitHub"
            >
              Follow @juandavid716
            </a>
            <a
              className="github-button"
              href="https://github.com/jaravad"
              aria-label="Follow @jaravad on GitHub"
            >
              Follow @jaravad
            </a>
            <a
              class="github-button"
              href="https://github.com/juandavid716/German_Website"
              data-icon="octicon-star"
              aria-label="Star juandavid716/German_Website on GitHub"
            >
              Star
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
