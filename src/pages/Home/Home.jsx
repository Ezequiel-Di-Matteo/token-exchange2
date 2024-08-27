import React from 'react';
import './Home.css';
import imagenSVG from './img.svg';

const Home = () => {
  return (
    <main className="home-main">
      <section className="home-section">
        <article className="home-article">
          <div className="home-textos">
            <h2 className='home-h2'>5k Market Cap Every Day</h2>
            <p className='home-p'>We launch a low market cap token day after day at 12:00 GMT</p>
            <a href="trade/index.html" className="home-button">Start trading</a>
          </div>
          
          <div className="home-img">
            <img src={imagenSVG} alt="Descripción de la imagen" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;