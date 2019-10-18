import React from "react";
import Header from "../Header/Header";
import brain from "../assets/icons/color-brain.svg";
import wave from "../assets/icons/color-wave.svg";
import flower from "../assets/icons/color-flower.svg";
import butterfly from "../assets/icons/butterfly.svg";
import butterflyicon from "../assets/icons/color-butterfly-first-page.svg";

import "./Welcome.css";

const Welcome = ({ setMenuDisplay }) => {
  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);
  return (
    <div className="welcome__container">
      <Header />
      <h2 className="welcome__title" data-testid="welcome-title">
        Welcome
      </h2>
      <p className="welcome__text__main">
        Welcome to the My Body Back app. Here is an
        overview of how to navigate through the site.
      </p>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={brain} alt="brain" />
        <p className="welcome__text">
          Learn about how our emotions work and what happens in the brain when we are reminded of a traumatic event, and learn new ways of helping yourself to feel better.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={wave} alt="wave" />
        <p className="welcome__text">
          Are your emotions taking over like a wave?
          You are not alone... find further sources of support and read Notes of Love from all around the world.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={flower} alt="flower" />
        <p className="welcome__text">
          The My Appointment section includes tips and advice to help before, during and after your cervical screening.
        </p>
      </div>
      <div className="welcome__icon__container">
        <img className="welcome__icon" src={butterflyicon} alt="butterfly" />
        <p className="welcome__text">
          Need help to navigate through the app? Find answers on the butterfly.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
