import React from 'react';
import './About.css'; // Or rename to Travel.css

const Travel = () => {
  return (
    <div className="about-container">
      <h1>🌍 Explore Our Travel Experiences</h1>
      <p className="intro">
        Discover unforgettable journeys tailored to your wanderlust. Whether you're seeking adventure, cultural immersion, or relaxation, our curated trips offer something for everyone. Travel with us and turn every destination into a lifelong memory.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3> ✈️ Europe Explorer </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Paris, Rome, Barcelona</div>
            <div className="cin">City Tours</div>
            <div className="cin">Museum Passes</div>
            <div className="cin">Local Cuisine</div>
            <div className="cin">Luxury Hotels</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🏔️ Himalayan Adventure </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Trekking</div>
            <div className="cin">Camping</div>
            <div className="cin">Spiritual Retreat</div>
            <div className="cin">Snow Activities</div>
            <div className="cin">Monastery Visits</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🏝️ Maldives Getaway </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Beach Resorts</div>
            <div className="cin">Snorkeling</div>
            <div className="cin">Couple Retreat</div>
            <div className="cin">Private Villas</div>
            <div className="cin">Sunset Cruises</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🌆 Urban Escapes </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Dubai</div>
            <div className="cin">New York</div>
            <div className="cin">Tokyo</div>
            <div className="cin">Luxury Malls</div>
            <div className="cin">Skyscraper Views</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🐾 Jungle Safari </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">National Parks</div>
            <div className="cin">Wildlife Spotting</div>
            <div className="cin">Nature Trails</div>
            <div className="cin">Eco Lodges</div>
            <div className="cin">Bird Watching</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🧘 Wellness Retreats </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Yoga in Bali</div>
            <div className="cin">Ayurveda in Kerala</div>
            <div className="cin">Spa Packages</div>
            <div className="cin">Meditation</div>
            <div className="cin">Detox Meals</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🎭 Cultural Trails </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Heritage Walks</div>
            <div className="cin">Temples & Palaces</div>
            <div className="cin">Traditional Food</div>
            <div className="cin">Art Festivals</div>
            <div className="cin">Local Markets</div>
          </div>
        </div>

        <div className="about-card">
          <h3> 🚴 Active Adventures </h3>
          <div className="buttons">
            <button className="button b1">Book Now</button>
          </div>
          <div className="cinh">
            <div className="cin">Biking Tours</div>
            <div className="cin">Rafting</div>
            <div className="cin">Rock Climbing</div>
            <div className="cin">Ziplining</div>
            <div className="cin">Hiking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
