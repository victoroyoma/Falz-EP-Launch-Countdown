import React, { useState } from "react";
import Countdown from "./components/Countdown";
import Confetti from "./components/Confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const App = () => {
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = () => {
    setIsFinished(true);
  };

  return (
    <div className={`app ${isFinished ? "disappear" : "fade-in"}`}>
      <div className="overlay">
        {isFinished && <Confetti />}
        <h1 className="album-title">"Before The Feast"</h1>
        <h2 className="release-date">Out June 7, 2024</h2>
        <Countdown onFinish={handleFinish} />
        <div className="social-media">
          <a
            href="https://x.com/falzthebahdguy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/falzthebahdguy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
