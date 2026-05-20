import React, { useEffect } from "react";
import fish1 from "./../images/abc1.JPG";
import fish2 from "./../images/fish2.jpeg";
import fish3 from "./../images/fish3.jpg"
import fish4 from "./../images/abc4.JPG"
import "./body.css";

const Body = () => {
  useEffect(() => {
    let myIndex = 0;

    const carousel = () => {
      const slides = document.getElementsByClassName("mySlides");
      if (slides.length === 0) return; // Ensure elements exist

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      myIndex++;
      if (myIndex > slides.length) myIndex = 1;

      slides[myIndex - 1].style.display = "block";
    };

    // Start the carousel on mount
    carousel();
    const intervalId = setInterval(carousel, 3000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="mySlides w3-display-container w3-center">
        <img src={fish1} alt="Fish in water" className="bod" />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3 className="imagetext">IoT Monitoring</h3>
          <h4 className="imagetext">
            <b>We will monitor the acidity of water!</b>
          </h4>
        </div>
      </div>
      <div className="mySlides w3-display-container w3-center">
        <img src={fish4} alt="React framework monitoring" className="bod" />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3 className="imagetext">Web application</h3>
          <h4 className="imagetext">
            <b>We are monitoring IoT-based data through React framework.</b>
          </h4>
        </div>
      </div>
      <div className="mySlides w3-display-container w3-center">
        <img src={fish3} alt="React framework monitoring" className="bod" />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3 className="imagetext">Feed Suggestion</h3>
          <h4 className="imagetext">
            <b>We can suggest various types of fish feed on feed page.</b>
          </h4>
        </div>
      </div>
      <div className="mySlides w3-display-container w3-center">
        <img src={fish2} alt="IoT-based water monitoring" className="bod" />
        <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3 className="imagetext">IoT Based</h3>
          <h4 className="imagetext">
            <b>We can monitor various water parameters like acidity, temperature, etc.</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Body;
