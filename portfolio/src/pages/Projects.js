import React, { useState } from "react";
import iq1 from "../assets/images/inttiquiz_1.png";
import iq2 from "../assets/images/inttiquiz_2.png";
import iq3 from "../assets/images/inttiquiz_3.png";
import iq4 from "../assets/images/inttiquiz_4.png";
import mac from "../assets/images/mac.png";
import iphone from "../assets/images/iphone.png";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const portfolioImages = [mac, iphone];
  const inttiImages = [iq1, iq2, iq3, iq4];

  const nextSlide = (setter, images) => {
    setter((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (setter, images) => {
    setter((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Projects: Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              The Portfolio is the site that you are looking at right now. My
              portfolio contains the projects that I have completed and am proud
              of.
            </p>
            <p className="text-lg text-gray-600">
              Portfolio is created with <b>React js</b>. I have used{" "}
              <b>Tailwind CSS</b> for styling. I am storing the received email
              data in <b>Firestore</b> and the tool for receiving mails is{" "}
              <b>nodemailer</b>.
            </p>
            <a
              className="btn-secondary inline-block"
              href="https://github.com/Hait3ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>To Github</b>
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-auto"
                src={portfolioImages[currentSlide]}
                alt={`Portfolio slide ${currentSlide + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => prevSlide(setCurrentSlide, portfolioImages)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => nextSlide(setCurrentSlide, portfolioImages)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-primary-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Intti Quiz Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-auto"
                src={inttiImages[currentSlide2]}
                alt={`Intti Quiz slide ${currentSlide2 + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => prevSlide(setCurrentSlide2, inttiImages)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => nextSlide(setCurrentSlide2, inttiImages)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {inttiImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide2(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide2 ? "bg-primary-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Projects: Intti Quiz
            </h2>
            <p className="text-lg text-gray-600">
              Intti Quiz is a quiz application for everyone interested in
              Finnish military ranks. The app includes both navy and ground
              force insignia.
            </p>
            <p className="text-lg text-gray-600">
              Intti Quiz was originally created with <b>Android Studio</b> in
              2015 and recreated the app with <b>Dart</b> in 2017. Without any
              marketing, the total download of the app is over 1000, and have
              received overall positive feedback.
            </p>
            <a
              className="btn-secondary inline-block"
              href="https://play.google.com/store/apps/details?id=haitech.sotilasmerkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>To Play Store</b>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
