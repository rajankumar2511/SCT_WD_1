import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // ✅ Import Outlet and Link
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: '📘 Courses Enrolled', value: 3 },
    { title: '📝 Assignments Due', value: 2 },
    { title: '📊 Overall Grade', value: 'A-' },
    { title: '🔥 Streak Days', value: 5 }
  ];

  return (

    <div class="faq-container">
      <h1>FAQs</h1>

      <div class="faq">
        <input type="checkbox" id="q1" />
        <label for="q1" class="question">What is the duration of Internship?</label>
        <div class="answer">
          The internship duration is typically one month.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q2" />
        <label for="q2" class="question">What is the criteria for selection?</label>
        <div class="answer">
          Determination to learn and grow is all what is needed.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q3" />
        <label for="q3" class="question">Can I complete multiple tracks together?</label>
        <div class="answer">
          To ensure a genuine learning experience, we've tailored our internship program to offer just one track per month for each student. This focused approach allows students to delve deep into their chosen track, facilitating thorough exploration and yielding high-quality outcomes.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q4" />
        <label for="q4" class="question">When does the internship start?</label>
        <div class="answer">
          Each batch starts at the start or mid of the month and ends on start or mid of next month respectively.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q5" />
        <label for="q5" class="question">Is there any fee for the internship?</label>
        <div class="answer">
          The internship itself is entirely free of charge. However, to cover the expenses related to certification documentation, there is a nominal fee of ₹99 that needs to be paid.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q6" />
        <label for="q6" class="question">Is the internship Offline or Online?</label>
        <div class="answer">
          All our internships are conducted entirely in a virtual mode, providing participants with online access to materials and tasks.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q7" />
        <label for="q7" class="question">When will I receive the Offer Letter?</label>
        <div class="answer">
          We process offer letters in batches, typically at the middle and end of each month. During this time, we kindly request your patience as we work to finalize the documents. <br />
          If you've already received the task submission email, we recommend checking your spam folder for the offer letter. In case you're unable to locate it, please reach out to us via email for assistance. We're here to ensure a smooth communication process and address any concerns you may have.
        </div>
      </div>

      <div class="faq">
        <input type="checkbox" id="q8" />
        <label for="q8" class="question">My CIN is showing as invalid?</label>
        <div class="answer">
          The activation of the CIN will occur upon the issuance of your Certificate of Completion. Once you have received your certificate, the CIN will be activated accordingly.
        </div>
      </div>
    </div>


  );
};

export default Dashboard;
