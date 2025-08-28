import React from "react";
import amfi from "../assets/images/amfi.png";

const AboutSecondary = () => {
  return (
    <section id="about-secondary" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">More about me</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I have lived in Finland for more than 25 years, and I am fluent
                in Finnish. Computer science has given me many challenges during
                my studies and work. I enjoy resolving problems and finding the
                best way to deliver the best quality of work. Seeing my work in
                use gives me one of the greatest feelings.
              </p>

              <p>
                I am an open person who enjoys working in teams and interacting
                with customers. I have experience in working as a team since I
                have been in many Hackathons where teams have to come up with an
                idea to resolve the given challenge. I have also worked on
                projects during my studies and work with different people.
              </p>
              <p>
                Sports are the way for me to get my thoughts and stress away
                from work. My main sports are breakdance, ultimate frisbee, and
                running. Unfortunately, breakdance and ultimate frisbee
                practices are canceled because of COVID-19 but at least I can
                still run outside.
              </p>
            </div>
          </div>
          <div>
            <img
              src={amfi}
              alt="profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondary;
