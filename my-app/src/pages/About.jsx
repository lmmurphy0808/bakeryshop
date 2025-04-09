import React from 'react';
import Navigation from '../components/Navigation';
import './css/About.css';

function About() {
  return (
    <main>
    <div className="main-header">
        <Navigation />
      </div>

      <div className="about-me">
        <h1>About Me</h1>
        <p>Baking has always been something I love doing—there’s just something so satisfying about creating something from scratch and watching it come to life in the oven...</p>
        <p>I take a lot of pride in perfecting my baking techniques, always looking for ways to improve...</p>

        <div className="content-wrapper">
          <div className="left-content">
            <img src="/images/travel.JPG" alt="Travel Adventure" />
          </div>
          <div className="right-content">
            <h2>Travelling Adventures</h2>
            <p>I have a deep love for traveling and exploring new places, which has taken me to 13 different countries so far...</p>
          </div>
        </div>

        <div className="content-wrapper reverse">
          <div className="left-content">
            <img src="/images/swift.JPG" alt="Eras Tour" />
          </div>
          <div className="right-content">
            <h2>Love for Music</h2>
            <p>I absolutely love listening to music, and attending concerts is one of my favorite ways to experience it...</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="left-content">
            <img src="/images/fh.jpg" alt="Field Hockey" />
          </div>
          <div className="right-content">
            <h2>My Athletic Journey</h2>
            <p>I played field hockey for several years, and it became one of the most rewarding parts of my high school experience...</p>
          </div>
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default About;
