import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="centered">
          <h1>Welcome to my awesome portfolio</h1>
          <br />
          <h3>
            {/* Is your company missing a combination of programmer and
              breakdance? <br></br> Yeah, I know quite rare huh? Well All you
              have to do is contact me by clicking the button below */}
            This website presents all the great works that I have done in my
            free time.
            {/* This website is created with React js. For styling I have used
              Bootstrap and SCSS */}
          </h3>
        </div>
      </header>
    );
  }
}

export default Header;
