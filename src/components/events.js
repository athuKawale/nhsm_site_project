import React, { useState, useEffect } from "react";
import "../static/loading.css"; // Import your CSS file

const Events = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
    const fakeApiCall = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a 2-second delay
    };

    fakeApiCall();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {loading ? (
        // Render a loading spinner or any other loading indicator
        <div className="loading-container">
          <div className="loading-spinner" />
        </div>
      ) : (
        <section className="hero-section">
          <p>Subscribe to </p>
          <h1>Atharva's Events Page</h1>
        </section>
      )}
    </>
  );
};

export default Events;
