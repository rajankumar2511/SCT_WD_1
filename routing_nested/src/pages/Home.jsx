import React from 'react';
import './Home.css';
import poster from '../assets/poster.jpg';
import whyImg from '../assets/whyus.jpg';
import Logo1 from '../assets/logo1.png';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="lines">
          <div className="blueline">Explore the World with Confidence</div>
          <div className="herohead">
            JetHue: Discover, Plan, and Experience Travel Like Never Before
          </div>
          <div className="heropara">
            JetHue is your trusted travel companion, helping you explore breathtaking destinations,
            craft personalized itineraries, and make memories that last a lifetime. Whether you're planning a weekend getaway or a world tour, we've got your back.
          </div>
          <div className="buttons">
            <button className="button b1">Start Your Journey</button>
          </div>
        </div>
        <div>
          <img src={poster} alt="poster" className="simg" />
        </div>
      </div>


      <div class="ptrust">Trusted by Travelers, Powered by Experts</div>


      <section className="feature-section">
        {/* Original Cards */}
        <div className="card">
          <div className="icon pink">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/user-group-man-man.png" alt="support" />
          </div>
          <h3 className="headca1">24/7 Travel Support</h3>
          <p>Any issue, any time — our travel team is just a message away.</p>
        </div>

        <div className="card">
          <div className="icon green">
            <img src="https://img.icons8.com/ios-glyphs/50/ffffff/planet--v1.png" alt="global" />
          </div>
          <h3 className="headca1">Global Destinations</h3>
          <p>From hidden gems to famous landmarks — all in one place.</p>
        </div>

        <div className="card">
          <div className="icon orange">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/conference-call.png" alt="community" />
          </div>
          <h3 className="headca1">Travel Community</h3>
          <p>Join a community of explorers, adventurers, and storytellers.</p>
        </div>

        {/* New Cards */}
        <div className="card">
          <div className="icon orange">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/diploma.png" alt="verified" />
          </div>
          <h3 className="headca1">Verified Guides</h3>
          <p>Get trusted recommendations from certified local experts.</p>
        </div>

        <div className="card">
          <div className="icon pink">
            <img src="https://img.icons8.com/ios/50/ffffff/stack-of-paper--v1.png" alt="articles" />
          </div>
          <h3 className="headca1">Inspiring Travel Content</h3>
          <p>Read tips, stories, and guides to fuel your next adventure.</p>
        </div>

        <div className="card">
          <div className="icon green">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/hand-holding-heart.png" alt="experience" />
          </div>
          <h3 className="headca1">Memorable Experiences</h3>
          <p>Plan trips that leave you with memories — not regrets.</p>
        </div>
      </section>



      <section className="whyus-section">
        <div className="whyus-image">
          <img src={whyImg} alt="Why choose us" />
        </div>
        <div className="whyus-content">
          <h2 className="whyus-heading">Why Travel with JetHue?</h2>
          <p className="whyus-subtitle">
            We create seamless, stress-free journeys from dream to destination.
          </p>
          <p className="whyus-para">
            JetHue is built for curious minds and free spirits. Whether you're a solo traveler, a family, or a digital nomad, we craft experiences that match your pace, passion, and personality.
          </p>
          <p className="whyus-para">
            With local insights, smart tools, and a vibrant travel community, Jethue redefines the way you explore the world — making each trip smooth, meaningful, and unforgettable.
          </p>
        </div>
      </section>


      <div class="ptrust margin">Contact us</div>

      <div className="contact-form">

        <div className="form-row">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Subject" />
        </div>

        <div className="form-row">
          <textarea placeholder="Message"></textarea>
        </div>

        <button className="submit-btn">Send Message</button>
      </div>

      <div className="anchor">
        <div className="link">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              style={{ height: '24px', verticalAlign: 'middle', marginRight: '8px' }}
            />
            Google
          </a>
        </div>

        <div className="link">
          <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              style={{ height: '24px', verticalAlign: 'middle', marginRight: '8px' }}
            />
            Microsoft
          </a>
        </div>

        <div className="link">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              style={{ height: '24px', verticalAlign: 'middle', marginRight: '8px' }}
            />
            LinkedIn
          </a>
        </div>

        <div className="link">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ height: '24px', verticalAlign: 'middle', marginRight: '8px' }}
            />
            Instagram
          </a>
        </div>
      </div>

        <div class="foot">
        <div class="f1">
          <div className="xyu">
            <img src={Logo1} alt="JetHue logo" className="logo-img1" />
            <div class="ftitle">JetHue TRAVELS</div>
          </div>
          <div class="fpara">Explore. Dream. Discover.</div>
        </div>
        <div class="f">
          <div class="fhead">Travel Packages</div>
          <a href="#" class="flink">Europe Tours</a>
          <a href="#" class="flink">Beach Getaways</a>
          <a href="#" class="flink">Mountain Treks</a>
          <a href="#" class="flink">Cultural Journeys</a>
        </div>
        <div class="f">
          <div class="fhead">Quick Links</div>
          <a href="#" class="flink">Home</a>
          <a href="#" class="flink">Destinations</a>
          <a href="#" class="flink">Plan a Trip</a>
          <a href="#" class="flink">Contact Us</a>
        </div>
      </div>
      <div class="arr">
        © 2025 JetHue. Travel smarter, go further. Created by Rajan Kumar.
      </div>
    </>



  );
};

export default Home;

