import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import ThreeDPhotoCarousel from "../Carousel/ThreeDPhotoCarousel";

function HomePage() {
  const logos = [
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 1" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 2" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 3" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 4" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 5" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 6" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 7" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 8" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 9" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 10" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 11" },
    { src: "https://go.growthschool.io/images/Group-3132.png", alt: "Logo 12" },
  ];
  const participants = [
    "Early stage D2C founders",
    "Aspiring D2C founders",
    "People working at D2C brand",
    "Small business owners",
    "Retail business owners wanting to go online",
    "Agencies & Professionals working in the D2C ecosystem",
    "Angels / Investors exploring the D2C market",
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between items-center p-4 sm:p-6 relative">
      {/* Gray dots background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22 width=%2240%22 height=%2240%22><circle cx=%2220%22 cy=%2220%22 r=%222%22 fill=%22gray%22 opacity=%220.1%22/></svg>')]"></div>

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between w-full py-4 space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold">Growth</h1>
            <span className="text-green-500">
              <ArrowRight className="w-4 h-4" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold">School</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#0A66C2] rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-2 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10m0-3H7c-.65 0-1.2.55-1.2 1.2v16.8c0 .65.55 1.2 1.2 1.2h10c.65 0 1.2-.55 1.2-1.2V4.2c0-.65-.55-1.2-1.2-1.2z" />
              </svg>
            </div>
            <div className="text-sm">Top Startup 2025</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center mt-8 sm:mt-12 px-2 sm:px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
          Build your Next Million-dollar D2C Brand
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto px-4">
          Learn from million-dollar D2C founders with an AI-optimized curriculum
          that evolves with your business - join a community of practitioners
          growing faster together.
        </p>
        <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold cursor-pointer hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto">
          D2C Mentorship
        </button>

        <div className="container mx-auto py-8 sm:py-12 flex flex-col items-center px-4">
          <h1 className="text-base sm:text-lg mb-6 sm:mb-8 text-white font-bold text-center">
            In collaboration with shopflo
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-12 w-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 px-4">
            We have helped scale 1200+ D2C Brands and Enablers like
          </p>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            9+ brands from our{" "}
            <span className="text-orange-500">D2C community</span> made it to
            the Shark Tank
          </h1>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-4xl mb-8 sm:mb-12 justify-center items-center mx-auto px-4">
          <div className="min-h-[300px] sm:min-h-[500px] flex flex-col justify-center border border-dashed rounded-lg space-y-4">
            <div className="p-2">
              <ThreeDPhotoCarousel />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4 sm:p-8">
          <div className="text-center max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                D2C Market is only GROWING
              </h1>
              <Rocket className="h-8 w-8 sm:h-12 sm:w-12 bg-red-500" />
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 px-4">
              In today's dynamic marketplace, traditional retail giants are
              being outpaced by a new wave of bold disruptors. D2C brands in
              India are experiencing hyper-growth and now is the perfect time to
              be part of this D2C revolution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                  $300 Bn
                </p>
                <p className="text-sm sm:text-md md:text-lg mt-2">
                  By 2030, D2C is projected to dominate 75% of the $400 Bn
                  e-commerce market in India.
                </p>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                  425 Million
                </p>
                <p className="text-sm sm:text-md md:text-lg mt-2">
                  India's online shopping base is set to reach 425 million by
                  2027, ranking third globally.
                </p>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                  $60 Billion
                </p>
                <p className="text-sm sm:text-md md:text-lg mt-2">
                  The Indian D2C market is expected to boom to $60B by 2027 at a
                  40% growth rate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-4">D2C Mentorship Program</h1>
      <p className="text-lg text-center mb-8">
        So, to help you make the best of this opportunity while building and scaling your D2C brand, we’ve launched
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        <div className="bg-gray-800 p-4 rounded-lg text-center">8-Weeks Program</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">20+ hours of live learning sessions</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">Lifetime Access to D2C community</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">1:1 Exclusive Mentorship Opportunities</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">Access to Offline events</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">6 Assignments</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">Integrate Gen AI Capabilities</div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">2–3 Hours of weekly commitment</div>
      </div>
      

      
     
    </div>



    <div className="bg-black text-white py-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Who is this program for?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {participants.map((participant, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center space-x-2"
          >
            <span className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>{participant}</span>
          </div>
        ))}
      </div>

      


    </div>






      </main>

      {/* Footer */}
      <footer className="bg-black py-6 sm:py-8 w-full">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            Apply Now
          </button>
          <a
            href="#"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg w-full sm:w-auto text-center"
          >
            Looking for team discount?
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
