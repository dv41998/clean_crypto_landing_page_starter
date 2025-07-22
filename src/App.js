import React from "react";
import FAQItem from "./components/FAQItem";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 py-4 gap-4 sm:gap-0">
        <img
          src="probo_logo.png"
          alt="Probo Crypto Logo"
          className="h-10 w-auto"
        />
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          {["Home", "About", "Mentors", "FAQs", "Contact"].map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`} className="hover:text-blue-400">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-12 gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">CRYPTO</span><br />
            <span className="text-white">MASTER</span>
            <span className="text-blue-400"> CLASS</span>
          </h1>
          <p className="text-lg mb-4">
            They already know the strategy. You’re just one class away.
          </p>
          <p className="text-md mb-6">
            Join Probo’s master traders and start your journey in crypto.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg">
              Pay ₹99 & Join Now
            </button>
            <p className="text-xs text-gray-200">
              Limited slots. Paid via Probo Wallet.
            </p>
          </div>

           <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919999999999"
    className="bg-green-600 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-green-500"
  >
    <span>💬</span> Chat on WhatsApp
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
      Fill the form to confirm your seat.
    </span>
</div>

        </div>

        {/* Right Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
          <img src="/btc.svg" alt="Crypto illustration" className="w-full" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-16 pb-10 px-6 sm:px-10 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">About the Masterclass</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          This exclusive masterclass is designed for cricket traders who want to unlock 24x7 opportunities in crypto. 
          Led by Probo’s top-performing users, the session covers candlestick reading, RSI, MACD, and real trade logic.
          All taught live — for just ₹99.
        </p>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="pt-10 pb-10 px-6 sm:px-10 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Our Mentors</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Our masterclass is led by Probo’s most successful and consistent traders — the top profit-makers from the past month who have collectively generated lakhs in trading profits. These mentors aren't just theorists; they actively
          trade every day and have mastered advanced techniques like candlestick analysis, RSI, MACD, and real-time market psychology. With years of experience and a deep
          understanding of both cricket and crypto markets, they are here to share their proven strategies and help you navigate your own path to profitable trading — all in a live, interactive session. 
        </p>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="pt-10 pb-16 px-6 sm:px-10 bg-white text-black">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl space-y-6">
          <FAQItem
            question="Do I need prior crypto experience?"
            answer="No, this masterclass is beginner-friendly. We cover basics like candlesticks, RSI, and trading logic."
          />
          <FAQItem
            question="What tools or platforms will we use?"
            answer="The session is focused on Probo's trading interface — you’ll learn everything directly in the app."
          />
          <FAQItem
            question="Is it a live or recorded session?"
            answer="It’s a live session where you can ask questions directly to the mentor."
          />
          <FAQItem
            question="How do I pay ₹99?"
            answer="You can pay using your Probo wallet after clicking the 'Join Now' button."
          />
        </div>
      </section>
    </div>
  );
}

export default App;
