import React, { useState } from "react";
import "./TabbedIdeas.css";

const Events = () => {
  const [activeTab, setActiveTab] = useState("fundraiser");

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "fundraiser" ? "active" : ""}`}
          onClick={() => setActiveTab("fundraiser")}
        >
          Fundraiser
        </button>
        <button
          className={`tab-button ${activeTab === "workshop" ? "active" : ""}`}
          onClick={() => setActiveTab("workshop")}
        >
          Workshop
        </button>
        <button
          className={`tab-button ${activeTab === "awareness" ? "active" : ""}`}
          onClick={() => setActiveTab("awareness")}
        >
          Awareness Campaign
        </button>
      </div>

      {activeTab === "fundraiser" && (
        <div className="tab-content active">
          <h2 style={{
            color:'rgb(241, 6, 84)'
          }}
          > Fundraiser Ideas</h2>
          <ul>
            <li><strong> Girls Got Talent Showcase:</strong> Talent show featuring girls’ performances.</li>
            <li><strong> Art for Change Auction:</strong> Auction empowering artworks made by girls.</li>
            <li><strong> Bake & Create Fair:</strong> Sell crafts and baked goods to raise funds.</li>
          </ul>
        </div>
      )}

      {activeTab === "workshop" && (
        <div className="tab-content active">
          <h2 style={{
            color:'rgb(241, 6, 84)'
          }}> Workshop Ideas</h2>
          <ul>
            <li><strong> Code & Confidence Bootcamp:</strong> Girls learn tech and public speaking.</li>
            <li><strong> Future Her: Career Day:</strong> Explore careers and soft skills.</li>
            <li><strong> Mind & Body Wellness:</strong> Yoga, journaling, and body positivity.</li>
          </ul>
        </div>
      )}

      {activeTab === "awareness" && (
        <div className="tab-content active">
          <h2 style={{
            color:'rgb(241, 6, 84)'
          }}> Awareness Campaign Ideas</h2>
          <ul>
            <li><strong> “I Am More Than...” Campaign:</strong> Girls share powerful self-statements online.</li>
            <li><strong> Girl Power Letter Drive:</strong> Women write encouragement letters to girls.</li>
            <li><strong> Walk for Her Rights:</strong> Peaceful walk to advocate girls’ rights.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Events 