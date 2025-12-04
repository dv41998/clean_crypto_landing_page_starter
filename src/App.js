import React from "react";
import FAQItem from "./components/FAQItem";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 py-4 gap-4 sm:gap-0">
        
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-bold tracking-wide text-white"
          style={{
            textShadow:
              "0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(96,165,250,0.6)",
          }}
        >
          RT <span
            className="text-blue-400"
            style={{
              textShadow:
                "0 0 6px rgba(96,165,250,0.9), 0 0 12px rgba(96,165,250,0.7)",
            }}
          >
            Science
          </span>{" "}
          Academy
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          {["Home", "Courses", "Fees & Tution Options", "Testimonials", "Contact"].map(
            (label) => (
              <li key={label}>
                <a
                  href={
                    label === "Courses"
                      ? "#courses"
                      : label === "Fees & Tution Options"
                      ? "#pricing"
                      : label === "Testimonials"
                      ? "#testimonials"
                      : label === "Contact"
                      ? "#contact"
                      : "#home"
                  }
                  className="hover:text-blue-400"
                >
                  {label}
</a>

            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full overflow-hidden bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 py-2">
         <p className="animate-marquee text-white font-bold text-lg whitespace-nowrap">
           🔥 Admissions Open for Chemistry + Biology Classes — Limited Seats! 🔥 Call now at 8115836660 . Lucknow, Uttar Pradesh 
         </p>
      </div>
       <div className="bg-blue-600 text-white text-center py-2 text-lg font-semibold tracking-wide shadow-md rounded-sm">
        ⭐ 25+ YEARS OF TEACHING EXPERIENCE IN CHEMISTRY & BIOLOGY ⭐
      </div>
  

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-12 gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">CHEMISTRY & BIOLOGY</span><br />
            <span className="text-white">MASTER</span>
            <span className="text-blue-400"> CLASSES</span>
          </h1>
          <p className="text-lg mb-4">
             Learn concepts the smart way and score higher in Class 11 & 12.
          </p>
          <p className="text-md mb-6">
            Join Ravi Tewari Sir’s expert classes and build strong fundamentals for Boards & NEET.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg">
              Enroll in Live Classes
            </button>
            <p className="text-xs text-gray-200">
              Limited slots. 
            </p>
          </div>

           <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/8115836660"
    className="bg-green-600 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-green-500"
  >
    <span>💬</span> Contact on WhatsApp
  </a>

  {/* Google Form Button */}
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdiOd1RSMiavVjXRvt57mTpQiftj05WRpx4DlQ4PwvKWP1Yag/viewform?usp=dialog"  // replace with your form link
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-blue-500 blink-button"
  >
    <img
      src="https://www.gstatic.com/images/icons/material/system/2x/assignment_white_24dp.png"
      alt="Google Form Icon"
      className="w-5 h-5"
    />
    Fill Form
  </a>
  <span className="text-xs text-gray-200 text-center sm:text-left">
      Register for Demo Class
    </span>
</div>

        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center">
          <img src="\teacher_photo.jpeg" alt="Ravi tewari" className="rounded-xl shadow-lg w-72 mb-4" />
          <div className="mt-4 text-center">
  <h2 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-sm">
    Ravi Tewari
  </h2>
  <div className="mx-auto mt-1 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
  <p className="text-blue-200 font-medium text-sm mt-2 tracking-wide">
    Senior Faculty • Chemistry & Biology
  </p>
</div>

          </div>
      </section>
    

      {/* mentor section */}
      <section id="about" className="pt-16 pb-10 px-6 sm:px-10 bg-white text-black">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-700 tracking-wide">
  Meet Your Mentor
</h2>

<div className="mx-auto mt-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

         {/* Paragraph */}
    <p className="text-gray-700 mt-6 leading-relaxed text-base md:text-lg text-center">
      With over <strong>25 years of teaching experience</strong>, Ravi Tewari Sir has guided 
      hundreds of students to success — including selections in top <strong>medical colleges, 
      IITs, and NITs</strong>. A former faculty member at leading institutes in <strong>Kota (PMT)</strong> 
      and <strong>IIT coaching centers</strong>, he is known for his mastery in handling repeaters, 
      fast revision techniques, concept clarity, and exceptional doubt-solving support.
      <br /><br />
      He is also an <strong>expert in building a strong foundation for Class 11 and 12</strong>, helping 
      students understand deeply and perform confidently in Boards and NEET.
    </p>

      </section>



     <section className="py-12 bg-white" id="courses">
  <div className="max-w-4xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-700 tracking-wide">
      Our Courses
    </h2>
    <div className="mx-auto mt-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

    <p className="text-center text-gray-600 mt-3">
      Choose the course that matches your goals and start learning with clarity.
    </p>

    {/* Course Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

      {/* Course 1 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Class 11 Chemistry</h3>
        <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
          <li>Complete NCERT Coverage</li>
          <li>Concept Building + Numericals</li>
          <li>Organic, Physical & Inorganic Basics</li>
          <li>Weekly Tests & Assignments</li>
        </ul>
      </div>

      {/* Course 2 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Class 12 Chemistry</h3>
        <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
          <li>Full Syllabus Coverage</li>
          <li>Exam-Oriented Problem Solving</li>
          <li>Organic Reaction Mechanisms</li>
          <li>Board & NEET Preparation</li>
        </ul>
      </div>

      {/* Course 3 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Class 11 Biology</h3>
        <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
          <li>NCERT Line-by-Line Explanation</li>
          <li>Mindmaps & Diagrams</li>
          <li>High-yield Topics Identified</li>
          <li>Regular Doubt Support</li>
        </ul>
      </div>

      {/* Course 4 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Class 12 Biology</h3>
        <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
          <li>Complete NEET-Focused Biology</li>
          <li>NCERT + Previous Year Questions</li>
          <li>Fast Revision Techniques</li>
          <li>Weekly Tests & Worksheets</li>
        </ul>
      </div>

    </div>
  </div>
</section>





<section className="py-12 bg-gray-50" id="pricing"  >
  <div className="max-w-4xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-700 tracking-wide">
      Fees & Tuition Options
    </h2>
    <div className="mx-auto mt-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

      {/* Offline Classes - Single Subject */}
      <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Offline Coaching</h3>
        <p className="mt-3 text-gray-700">Single Subject (Bio / Chemistry)</p>
        <p className="mt-4 text-2xl font-extrabold text-blue-700">₹ 3,000 / month</p>
      </div>

      {/* Offline Classes - Combo */}
      <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">Offline Combo Classes</h3>
        <p className="mt-3 text-gray-700">Biology + Chemistry</p>
        <p className="mt-4 text-2xl font-extrabold text-blue-700">₹ 5,000 / month</p>
      </div>

      {/* Home Tuition */}
      <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-blue-600">One-to-One Home Tuition</h3>
        <p className="mt-3 text-gray-700">Lucknow, Uttar Pradesh</p>
        <p className="mt-4 text-2xl font-extrabold text-blue-700">₹ 1,000 / lecture</p>
      </div>

      {/* Online Group Tuition */}
      <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition md:col-span-3">
        <h3 className="text-xl font-bold text-blue-600">Online Group Tuition</h3>
        <p className="mt-3 text-gray-700">7 Students per Batch</p>
        <p className="mt-4 text-2xl font-extrabold text-blue-700">₹ 2,000 / subject</p>
      </div>

    </div>
  </div>
</section>


     

      <section className="py-12 bg-white" id="testimonials">
  <div className="max-w-4xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-700 tracking-wide">
      Testimonials
    </h2>
    <div className="mx-auto mt-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

    <p className="text-center text-gray-600 mt-3">
      Hear from students who learned and succeeded under Ravi Tewari Sir.
    </p>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

      {/* Testimonial 1 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 bg-gray-50">
        <p className="text-gray-700">
          “Sir explains every concept with such clarity that even difficult chapters 
          start feeling easy. His doubt-solving is unmatched.”
        </p>
        <h4 className="mt-4 font-bold text-blue-600">— Ayushi, Class 12</h4>
      </div>

      {/* Testimonial 2 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 bg-gray-50">
        <p className="text-gray-700">
          “Thanks to Tewari Sir’s revision strategy, I improved my score from 62% 
          to 91%. His way of teaching is truly unique.”
        </p>
        <h4 className="mt-4 font-bold text-blue-600">— Adarsh, Class 11</h4>
      </div>

      {/* Testimonial 3 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 bg-gray-50">
        <p className="text-gray-700">
          “The best teacher for Biology and Chemistry. His teaching made NEET prep 
          so much easier and stress-free for me.”
        </p>
        <h4 className="mt-4 font-bold text-blue-600">— Shreya, NEET Aspirant</h4>
      </div>

      {/* Testimonial 4 */}
      <div className="p-6 rounded-xl shadow-lg border border-gray-100 bg-gray-50">
        <p className="text-gray-700">
          “I joined the repeater batch and the personal guidance I received helped 
          me crack medical entrance with confidence.”
        </p>
        <h4 className="mt-4 font-bold text-blue-600">— Rohan, Repeater Batch</h4>
      </div>

    </div>
  </div>
</section>

<section className="py-12 bg-gray-50" id="contact">
  <div className="max-w-4xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-blue-700 tracking-wide">
      Contact Us
    </h2>
    <div className="mx-auto mt-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

    <p className="text-center text-gray-600 mt-3">
      Get in touch for admissions, counseling, and batch details.
    </p>

    <div className="mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-100">

      <h3 className="text-xl font-bold text-blue-600 text-center">Coaching Address</h3>
      <p className="text-gray-700 text-center mt-2 leading-relaxed">
        Vipul Plaza, Vipul Khand 3,<br />
        Near Scholars Home School,<br />
        Gomti Nagar, Lucknow, Uttar Pradesh<br />
        Pincode: 226010
      </p>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-blue-600">Contact Number</h3>
        <a href="tel:8115836660" className="text-2xl font-bold text-blue-700 hover:text-blue-500">
          8115836660
        </a>
      </div>

      <div className="text-center mt-6">
        <a
          href="https://wa.me/918115836660"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

    </div>
  </div>
</section>


    </div>
  );
}

export default App;
