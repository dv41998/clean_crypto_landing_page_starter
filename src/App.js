import React from "react";
import FAQItem from "./components/FAQItem";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] via-[#090979] to-[#00d4ff] text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <img
          src="probo_logo.png"
          alt="Probo Crypto Logo"
          className="h-10 w-auto"
        />
        <ul className="flex gap-6 text-sm">
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
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
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

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg">
              Pay ₹99 & Join Now
            </button>
            <p className="text-xs text-gray-200">
              Limited slots. Paid via Probo Wallet.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="https://wa.me/919999999999"
              className="bg-green-600 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-green-500"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="hidden md:block max-w-md">
          <img
            src="/btc.svg"
            alt="Crypto illustration"
            className="w-[400px] md:w-[500px] mx-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-10 px-10 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">About the Masterclass</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          This exclusive masterclass is designed for cricket traders who want to unlock 24x7 opportunities in crypto. 
          Led by Probo’s top-performing users, the session covers candlestick reading, RSI, MACD, and real trade logic.
          All taught live — for just ₹99.
        </p>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="pt-10 pb-10 px-10 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Our Mentors</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Our masterclass is led by Probo’s most successful and consistent traders — the top profit-makers from the past month who have collectively generated lakhs in trading profits. These mentors aren't just theorists; they actively
           trade every day and have mastered advanced techniques like candlestick analysis, RSI, MACD, and real-time market psychology. With years of experience and a deep
            understanding of both cricket and crypto markets, they are here to share their proven strategies and help you navigate your own path to profitable trading — all in a live, interactive session. 
          
      
        </p>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="pt-10 pb-10 px-10 bg-white text-black">
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
