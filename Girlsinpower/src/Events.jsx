// function Events() {
  // return (
  //   <section className="events">
  //     <h2>Events & Campaigns</h2>
  //     <h3>Upcoming Events</h3>
  //     <p>Leadership Workshop – June 20</p>
  //     <p>Back-to-School Fundraiser – July 10</p>
  //     <h3>Past Highlights</h3>
      // import React, { useState } from "react";
// import "./TabbedIdeas.css"; 

// const Events = () => {
//   const [activeTab, setActiveTab] = useState("fundraiser");

//   return (
//     <div className="tabs-container">
//       <div className="tabs">
//         <button
//           className={`tab-button ${activeTab === "fundraiser" ? "active" : ""}`}
//           onClick={() => setActiveTab("fundraiser")}
//         >
//           Fundraiser
//         </button>
//         <button
//           className={`tab-button ${activeTab === "workshop" ? "active" : ""}`}
//           onClick={() => setActiveTab("workshop")}
//         >
//           Workshop
//         </button>
//         <button
//           className={`tab-button ${activeTab === "awareness" ? "active" : ""}`}
//           onClick={() => setActiveTab("awareness")}
//         >
//           Awareness Campaign
//         </button>
//       </div>

//       {/* Fundraiser Tab */}
//       {activeTab === "fundraiser" && (
//         <div className="tab-content active">
//           <h2>🌟 Fundraiser Ideas</h2>
//           <ul>
//             <li><strong>💃🏽 Girls Got Talent Showcase:</strong> Talent show featuring girls’ performances.</li>
//             <li><strong>🎨 Art for Change Auction:</strong> Auction empowering artworks made by girls.</li>
//             <li><strong>🍰 Bake & Create Fair:</strong> Sell crafts and baked goods to raise funds.</li>
//           </ul>
//         </div>
//       )}

//       {/* Workshop Tab */}
//       {activeTab === "workshop" && (
//         <div className="tab-content active">
//           <h2>✨ Workshop Ideas</h2>
//           <ul>
//             <li><strong>💻 Code & Confidence Bootcamp:</strong> Girls learn tech and public speaking.</li>
//             <li><strong>💼 Future Her: Career Day:</strong> Explore careers and soft skills.</li>
//             <li><strong>🧘🏾‍♀️ Mind & Body Wellness:</strong> Yoga, journaling, and body positivity.</li>
//           </ul>
//         </div>
//       )}

//       {/* Awareness Campaign Tab */}
//       {activeTab === "awareness" && (
//         <div className="tab-content active">
//           <h2>📢 Awareness Campaign Ideas</h2>
//           <ul>
//             <li><strong>📸 “I Am More Than...” Campaign:</strong> Girls share powerful self-statements online.</li>
//             <li><strong>📬 Girl Power Letter Drive:</strong> Women write encouragement letters to girls.</li>
//             <li><strong>🚶🏽‍♀️ Walk for Her Rights:</strong> Peaceful walk to advocate girls’ rights.</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

//       <div className="event-gallery">
//         <img src="/event1.jpg" alt="Workshop highlight" />
//         <img src="/event2.jpg" alt="Fundraiser event" />
//       </div>
//     </section>
//   );
// }
// export default Events

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
          <h2> Fundraiser Ideas</h2>
          <ul>
            <li><strong> Girls Got Talent Showcase:</strong> Talent show featuring girls’ performances.</li>
            <li><strong> Art for Change Auction:</strong> Auction empowering artworks made by girls.</li>
            <li><strong> Bake & Create Fair:</strong> Sell crafts and baked goods to raise funds.</li>
          </ul>
        </div>
      )}

      {activeTab === "workshop" && (
        <div className="tab-content active">
          <h2> Workshop Ideas</h2>
          <ul>
            <li><strong> Code & Confidence Bootcamp:</strong> Girls learn tech and public speaking.</li>
            <li><strong> Future Her: Career Day:</strong> Explore careers and soft skills.</li>
            <li><strong> Mind & Body Wellness:</strong> Yoga, journaling, and body positivity.</li>
          </ul>
        </div>
      )}

      {activeTab === "awareness" && (
        <div className="tab-content active">
          <h2> Awareness Campaign Ideas</h2>
          <ul>
            <li><strong> “I Am More Than...” Campaign:</strong> Girls share powerful self-statements online.</li>
            <li><strong> Girl Power Letter Drive:</strong> Women write encouragement letters to girls.</li>
            <li><strong> Walk for Her Rights:</strong> Peaceful walk to advocate girls’ rights.</li>
          </ul>
        </div>
      )}
    </div>

    // import React, { useState } from "react";

// const Events= () => {
//   const events = [ /* put the event data here */ ];

//   const [currentEventIndex, setCurrentEventIndex] = useState(0);
//   const event = events[currentEventIndex];

//   const prevEvent = () => {
//     setCurrentEventIndex(
//       currentEventIndex === 0 ? events.length - 1 : currentEventIndex - 1
//     );
//   };

//   const nextEvent = () => {
//     setCurrentEventIndex(
//       currentEventIndex === events.length - 1 ? 0 : currentEventIndex + 1
//     );
//   };

//   return (
//     <div className="event-spotlight-container">
//       <h2>Event of the Month Spotlight</h2>
//       <h3>{event.title}</h3>
//       <p>{event.description}</p>

//       <video
//         controls
//         src={event.videoUrl}
//         style={{ width: "100%", maxHeight: "400px", borderRadius: "10px" }}
//       >
//         Sorry, your browser doesn't support embedded videos.
//       </video>

//       <div className="image-gallery" style={{ marginTop: "20px", display: "flex", gap: "10px", overflowX: "auto" }}>
//         {event.images.map((imgUrl, i) => (
//           <img
//             key={i}
//             src={imgUrl}
//             alt={`${event.title} pic ${i + 1}`}
//             style={{ height: "120px", borderRadius: "8px", cursor: "pointer" }}
//             onClick={() => window.open(imgUrl, "_blank")}
//           />
//         ))}
//       </div>

//       <div className="navigation-buttons" style={{ marginTop: "20px" }}>
//         <button onClick={prevEvent} style={{ marginRight: "10px" }}>
//           ← Previous Event
//         </button>
//         <button onClick={nextEvent}>Next Event →</button>
//       </div>
//     </div>
//   );
// };

// export default PastEventsSpotlight;

  );
};

export default Events 