import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to my awesome portfolio
        </h1>
        <h3 className="text-xl leading-relaxed">
          This website presents all the great works that I have done in my free
          time, built with modern technologies like React 18 and Tailwind CSS.
        </h3>
      </div>
    </header>
  );
};

export default Header;
