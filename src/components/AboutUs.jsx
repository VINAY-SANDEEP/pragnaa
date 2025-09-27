import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our E-Learning platform! We are dedicated to providing 
            innovative and accessible education for students to learn, grow, 
            and achieve their goals anytime, anywhere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="E-learning team"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission is to empower students with quality education through 
              interactive online courses, personalized learning paths, and 
              engaging study materials.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6">
              We believe in a future where learning is not limited by time, 
              location, or resources. Our vision is to make education more 
              inclusive, modern, and impactful.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Interactive online courses</li>
              <li>Live classes & recorded sessions</li>
              <li>Performance tracking & reports</li>
              <li>Personalized support from mentors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
