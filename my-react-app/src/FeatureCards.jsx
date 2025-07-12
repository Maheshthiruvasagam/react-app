import React from "react";
import "./FeatureCards.css"; // We’ll use external CSS for responsive layout

const features = [
  {
    title: "Download and Watch Offline",
    description: "Save your favorites and watch without internet.",
    image: "https://picsum.photos/id/1011/300/200",
  },
  {
    title: "No Ads, Just Movies",
    description: "Enjoy uninterrupted streaming, anytime.",
    image: "https://picsum.photos/id/1012/300/200",
  },
  {
    title: "Watch Anywhere",
    description: "Compatible with all devices — phone, tablet, TV.",
    image: "https://picsum.photos/id/1013/300/200",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-section">
      <h2 className="feature-title">Why Choose Us?</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
