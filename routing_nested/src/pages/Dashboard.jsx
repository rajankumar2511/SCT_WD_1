import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // ✅ Import Outlet and Link
import './Dashboard.css';

const Dashboard = () => {

  return (

    <div class="faq-container">
      <h1>FAQs</h1>

      <div class="faq">
        <input type="checkbox" id="q1" />
        <label for="q1" class="question">What destinations does JetHue offer?</label>
        <div class="answer">
          JetHue offers curated travel packages to both domestic and international locations including beaches, mountains, heritage cities, and offbeat getaways.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q2" />
        <label for="q2" class="question">Can I customize my travel itinerary?</label>
        <div class="answer">
          Yes, JetHue allows complete customization of itineraries based on your preferences, including stay, travel, and sightseeing options.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q3" />
        <label for="q3" class="question">Do you offer group or solo travel packages?</label>
        <div class="answer">
          We offer both! Whether you're traveling solo, as a couple, with friends, or with family — we have packages tailored for every type of traveler.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q4" />
        <label for="q4" class="question">What is your cancellation and refund policy?</label>
        <div class="answer">
          You can cancel your booking up to 7 days before departure for a full refund. For late cancellations, partial charges may apply depending on hotel and airline policies.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q5" />
        <label for="q5" class="question">Are flights included in JetHue packages?</label>
        <div class="answer">
          Some packages include flights, while others are land-only. You can filter options or request flight inclusion during booking.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q6" />
        <label for="q6" class="question">Do you provide visa assistance?</label>
        <div class="answer">
          Yes, JetHue offers visa support for applicable destinations including document guidance, appointment bookings, and follow-ups.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q7" />
        <label for="q7" class="question">How will I receive my booking confirmation?</label>
        <div class="answer">
          Once your booking is confirmed, you will receive a detailed itinerary and invoice via email and WhatsApp within 24 hours.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q8" />
        <label for="q8" class="question">Is travel insurance included in your packages?</label>
        <div class="answer">
          Travel insurance is optional and can be added at checkout. We strongly recommend it for international trips to cover emergencies or cancellations.
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
