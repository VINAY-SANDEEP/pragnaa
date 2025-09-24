import React, { useState } from "react";

const instructorsData = [
  {
    id: 1,
    name: "Ravi Kumar",
    title: "Maths Teacher",
    bio: "Ravi has 8 years of experience teaching Mathematics from class 6 to 12.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRm_qt9nislMEEdOYAkMgNvZ3DEu4e6lv3w&s",
    expertise: "Maths",
    courses: ["Class 6 Maths", "Class 7 Maths", "Class 8 Maths", "Class 9 Maths", "Class 10 Maths"],
  },
  {
    id: 2,
    name: "Anjali Sharma",
    title: "Physics Teacher",
    bio: "Anjali specializes in Physics for classes 9 to 12 and focuses on practical understanding.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-e73lHSywvwHbtQulEd1uIwl40tbvVkJwjQ&s",
    expertise: "Physics",
    courses: ["Class 9 Physics", "Class 10 Physics", "Class 11 Physics", "Class 12 Physics"],
  },
  {
    id: 3,
    name: "Amit Verma",
    title: "Chemistry Teacher",
    bio: "Amit has 10 years of experience teaching Chemistry to school students.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCa6RYEC--HOxrBAfda7rpEJxoOoOIo5mVw&s",
    expertise: "Chemistry",
    courses: ["Class 9 Chemistry", "Class 10 Chemistry", "Class 11 Chemistry", "Class 12 Chemistry"],
  },
  {
    id: 4,
    name: "Priya Singh",
    title: "Hindi Teacher",
    bio: "Priya teaches Hindi literature and grammar for classes 1 to 12.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1UbjXZrrM8havScvUDnN807ihc8wQvglFQ&s",
    expertise: "Hindi",
    courses: ["Class 1 Hindi", "Class 2 Hindi", "Class 3 Hindi", "Class 4 Hindi", "Class 5 Hindi"],
  },
  {
    id: 5,
    name: "Suresh Patel",
    title: "Social Science Teacher",
    bio: "Suresh has been teaching Social Science to school students for over 12 years.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46cTG7zL--8wBMn-O-4ROpTrRnH14F2dJHg&s",
    expertise: "Social Science",
    courses: ["Class 6 Social", "Class 7 Social", "Class 8 Social", "Class 9 Social", "Class 10 Social"],
  },
];

// Map subjects to colors
const subjectColors = {
  Maths: "bg-blue-100 text-blue-700",
  Physics: "bg-green-100 text-green-700",
  Chemistry: "bg-purple-100 text-purple-700",
  Hindi: "bg-orange-100 text-orange-700",
  "Social Science": "bg-yellow-100 text-yellow-700",
};

const InstructorDirectory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const filteredInstructors = instructorsData.filter(
    (inst) =>
      inst.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? inst.expertise === filter : true)
  );

  const expertiseOptions = [...new Set(instructorsData.map((inst) => inst.expertise))];

  return (
    <div className="container mx-auto p-6">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search instructors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Subjects</option>
          {expertiseOptions.map((exp, idx) => (
            <option key={idx} value={exp}>
              {exp}
            </option>
          ))}
        </select>
      </div>

      {/* Instructor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredInstructors.map((inst) => (
          <div
            key={inst.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-20 h-20 object-cover rounded-full mb-3 border-2 border-blue-300"
            />
            <h2 className="text-xl font-bold text-gray-800">{inst.name}</h2>
            <p className="text-gray-600">{inst.title}</p>
            <p className="mt-2 text-gray-700">{inst.bio}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded-full text-sm ${subjectColors[inst.expertise]}`}
            >
              {inst.expertise}
            </span>
            <button
              onClick={() => setSelectedInstructor(inst)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              View Courses
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 relative shadow-lg">
            <button
              onClick={() => setSelectedInstructor(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedInstructor.name}'s Courses</h2>
            <ul className="list-disc list-inside space-y-2">
              {selectedInstructor.courses.map((course, idx) => (
                <li key={idx} className="text-gray-700">{course}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorDirectory;
