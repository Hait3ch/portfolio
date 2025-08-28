import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-200"
              href="https://www.linkedin.com/in/haiphanfin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-200"
              href="https://www.instagram.com/hait3ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              className="text-gray-300 hover:text-white transition-colors duration-200"
              href="https://github.com/Hait3ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
