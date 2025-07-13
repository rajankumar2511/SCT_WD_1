import React from 'react';
import './Home.css';
import poster from '../assets/poster.png';
import whyImg from '../assets/whyus.jpg';
import Logo1 from '../assets/logo1.png';


const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="lines">
          <div className="blueline">Empowering a Generation of Innovators</div>
          <div className="herohead">
            SkillCraft: Building Brighter Futures Through Learning and Growth
          </div>
          <div className="heropara">
            SkillCraft is more than a platform — it’s a launchpad for students to unlock their potential,
            explore their passions, and gain real-world experience. We provide the tools, guidance, and
            opportunities needed to turn curiosity into capability and ambition into achievement. The future is yours — let’s build it together.
          </div>
          <div className="buttons">
            <button className="button b1">Apply for Internship</button>
          </div>
        </div>
        <div>
          <img src={poster} alt="poster" className="simg" />
        </div>
      </div>


      <div class="ptrust">Built for learners,Backed by experts.</div>


      <section className="feature-section">
        <div className="card">
          <div className="icon pink">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/user-group-man-man.png" alt="support" />
          </div>
          <h3 className="headca1">24/7 Support</h3>
          <p>We're always here. Day or night, your queries will never go unanswered.</p>
        </div>

        <div className="card">
          <div className="icon green">
            <img src="https://img.icons8.com/ios-glyphs/50/ffffff/planet--v1.png" alt="ownership" />
          </div>
          <h3 className="headca1">Take Ownership</h3>
          <p>Drive tasks to completion with confidence and personal responsibility.</p>
        </div>

        <div className="card">
          <div className="icon orange">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/conference-call.png" alt="networking" />
          </div>
          <h3 className="headca1">Networking</h3>
          <p>Build valuable connections with interns and industry professionals.</p>
        </div>

        <div className="card">
          <div className="icon orange">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/diploma.png" alt="certificate" />
          </div>
          <h3 className="headca1">Verified Certificates</h3>
          <p>Get Verified Certificates to prove your hard work!</p>
        </div>

        <div className="card">
          <div className="icon pink">
            <img src="https://img.icons8.com/ios/50/ffffff/stack-of-paper--v1.png" alt="content" />
          </div>
          <h3 className="headca1">High-quality Content</h3>
          <p>Great content to prepare students for their future careers.</p>
        </div>

        <div className="card">
          <div className="icon green">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/hand-holding-heart.png" alt="experience" />
          </div>
          <h3 className="headca1">Hands-on Experience</h3>
          <p>Gain practical experience by working on real-world projects.</p>
        </div>
      </section>



      <section className="whyus-section">
        <div className="whyus-image">
          <img src={whyImg} alt="Why choose us" />
        </div>
        <div className="whyus-content">
          <h2 className="whyus-heading">Why Choose SkillCraft?</h2>
          <p className="whyus-subtitle">
            We provide industry-designed internship programs.
          </p>
          <p className="whyus-para">
            At the heart of SkillCraft Technology lies a commitment to empowering individuals through skills development. We understand that in today's dynamic landscape, continuous upskilling is not just an advantage but a necessity.
          </p>
          <p className="whyus-para">
            Through our meticulously curated internship programs and educational initiatives, we equip students with the practical knowledge and hands-on experience needed to thrive in their chosen fields.
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
            <img src={Logo1} alt="Skillcraft logo" className="logo-img1" />
            <div class="ftitle">SkillCraft TECHNOLOGY</div>
          </div>
          <div class="fpara">Empowering a Generation of Innovators</div>
        </div>
        <div class="f">
          <div class="fhead">Internships</div>
          <a href="#" class="flink">Web development</a>
          <a href="#" class="flink">Graphics Design</a>
          <a href="#" class="flink">Data Sciene</a>
          <a href="#" class="flink">Software Development</a>
        </div>
        <div class="f">
          <div class="fhead">Quick Links</div>
          <a href="#" class="flink">Home</a>
          <a href="#" class="flink">Features</a>
          <a href="#" class="flink">FAQs</a>
          <a href="#" class="flink">Contact us</a>
        </div>
      </div>
      <div class="arr">
        © 2025 SkillCraft. Recreated for internship learning purposes by Rajan Kumar.
      </div>



    </>
  );
};

export default Home;

