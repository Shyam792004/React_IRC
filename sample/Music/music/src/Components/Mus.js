import React from 'react';
import { Link } from 'react-router-dom';
import './Mus.css';

const Mus = () => {
  return (
    <>
      <h1>Start Music🎵</h1>

      <div className="card">
        <div className="cover">
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="card-content">
          <h4>
            <Link to="#">
              Muse
            </Link>
            : The Singles
          </h4>
          <p>
            Listen to{' '}
            <Link to="#">
              Muse
            </Link>
            's singles now, including Supermassive Black Hole
          </p>
          <audio controls></audio>
        </div>
      </div>

      <div className="card">
        <div className="cover artist">
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="card-content">
          <h4>
            <Link to="#">
              Billie Eilish
            </Link>
          </h4>
          <p>Artist</p>
          <audio controls></audio>
        </div>
      </div>

      <div className="card">
        <div className="cover">
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="card-content">
          <h4>
            <Link to="#">
              Still on My Mind
            </Link>
          </h4>
          <p>
            <Link to="#">
              Dido
            </Link>
          </p>
          <audio controls></audio>
        </div>
      </div>

      <div className="card">
        <div className="cover artist">
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="card-content">
          <h4>
            <Link to="#">
              Billie Eilish
            </Link>
          </h4>
          <p>Artist</p>
          <audio controls></audio>
        </div>
      </div>
    </>
  );
};

export default Mus;
