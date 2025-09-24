import React from "react";

export default function Service() {
  const services = [
    {
      title: "Online Assessment",
      desc: "AI-powered online assessments provide a personalized evaluation of your skills to enhance your learning and development.",
      img: "https://www.shutterstock.com/image-vector/vector-illustration-icon-concept-survey-260nw-1190954458.jpg", // your logo path
    },
    {
      title: "Online Classes",
      desc: "Take advantage of our online classes to expand your knowledge and skills with expert instructors.",
      img: "https://img.freepik.com/premium-vector/web-education-logo-template-design-vector_567288-16.jpg",
    },
    {
      title: "Home Projects",
      desc: "Transform your living space with creative home project ideas designed to inspire innovation.",
      img: "https://images.scalebranding.com/bridge-home-logo-design-ae386436-6bdc-416b-9d34-fe59779ee6a7.jpg",
    },
    {
      title: "Book Library",
      desc: "Our e-library offers a diverse range of e-books and digital resources for every interest and age group.",
      img: "https://static.vecteezy.com/system/resources/previews/020/402/234/non_2x/library-book-reading-abstract-icon-or-emblem-vector.jpg",
    },
  ];

  const handleClick = (service) => {
    console.log(`Clicked on: ${service.title}`);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(service)}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600">
                  {service.title}
                </h5>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
