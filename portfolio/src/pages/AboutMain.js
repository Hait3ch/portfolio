import React from "react";
import hai from "../assets/images/hai.jpg";

const AboutMain = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={hai}
              alt="profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I graduated from <b>Aalto University</b> in the field of
                Computer Science. My Major is{" "}
                <b>Web Technologies, Science and Applications</b>. I have been
                working as an IT consultant at Lempinen & Partners since 2015.
                The main tasks are maintaining client's ServiceNow platform and
                developer in the telecom industry and public sector.
              </p>

              <p>
                I have implementation experiences in the following solutions
                areas in <b>ITSM</b> (Request fulfillment, Incident, Problem,
                Change, CMDB, and Service level management). In <b>ITBM</b>, I
                have experience in Agile projects (~100 scrum users). Also,
                implementing Performance Analytics to keep client's platforms
                running healthy.
              </p>
              <p>
                I am seeking for challenge outside of ServiceNow environment and
                am looking for a job in a full-stack, mobile- or front-end
                developer position. I am specialised in{" "}
                <b>JavaScript, React js, Dart, Android Studio.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
