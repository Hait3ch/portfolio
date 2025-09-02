import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Root from "./pages/Root";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */

        if (scrollY > 50) {
          document.querySelector(".navbar")?.classList.add("active");
        } else {
          document.querySelector(".navbar")?.classList.remove("active");
        }

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.add("active");
        } else {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.remove("active");
        }
      });
    };

    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const elementsToShow = document.querySelectorAll(".show-on-scroll");

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function") {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }

    function loop() {
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });

      scroll(loop);
    }

    window.addEventListener("scroll", handleScroll);
    loop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
