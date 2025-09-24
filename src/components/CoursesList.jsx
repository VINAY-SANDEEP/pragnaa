import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Expanded course data with random details and videos
const coursesData = [
  {
    id: 1,
    title: "Class 10 Maths: Real Numbers",
    class: "10",
    subject: "Math",
    faculty: "Shobhit Nirwan",
    description: "Complete Real Numbers chapter for Class 10, including theory, solved examples, and exam-oriented questions.",
    thumbnail: "https://img.youtube.com/vi/-UdHmSTmQtw/hqdefault.jpg",
    playlistUrl: "https://www.youtube.com/playlist?list=PLAODbdRxgpSPEQsFStrtiVi9i7dqfDMPS",
    videos: [
      {
        title: "Class 10th Real Numbers One Shot",
        url: "https://www.youtube.com/watch?v=-UdHmSTmQtw",
        thumbnail: "https://img.youtube.com/vi/-UdHmSTmQtw/mqdefault.jpg",
        description: "One-shot complete video covering the Real Numbers chapter with clarity and examples."
      },
      {
        title: "Real Numbers FULL CHAPTER | Class 10th Mathematics",
        url: "https://www.youtube.com/watch?v=CobQvtjL5gc",
        thumbnail: "https://img.youtube.com/vi/CobQvtjL5gc/mqdefault.jpg",
        description: "Full chapter explained step-by-step with NCERT solutions and board exam focus."
      }
    ]
  },
  {
    id: 2,
    title: "NEET Physics: Laws of Motion",
    class: "11",
    subject: "Science",
    faculty: "Alakh Pandey (Physics Wallah)",
    description: "Conceptual clarity and problem-based learning on laws of motion with NEET orientation.",
    thumbnail: "https://img.youtube.com/vi/gStx4uUKC5g/hqdefault.jpg",
    playlistUrl: "https://www.youtube.com/playlist?list=PLj5Sjn0a0P2F8hFYyVhzL7rbWxhcqhi9b",
    videos: [
      {
        title: "Introduction to Laws of Motion",
        url: "https://www.youtube.com/watch?v=gStx4uUKC5g",
        thumbnail: "https://img.youtube.com/vi/gStx4uUKC5g/mqdefault.jpg",
        description: "Start with basics of laws of motion for NEET and JEE preparation."
      },
      {
        title: "Newton’s First Law",
        url: "https://www.youtube.com/watch?v=2bfbDvdhKzI",
        thumbnail: "https://img.youtube.com/vi/2bfbDvdhKzI/mqdefault.jpg",
        description: "Detailed explanation and problem solving on Newton’s First Law."
      }
    ]
  },
  {
    id: 3,
    title: "Grade 8 Science: Nutrition in Animals",
    class: "8",
    subject: "Science",
    faculty: "Khan Academy India",
    description: "Core concepts of nutrition in animals aligned with CBSE and olympiad syllabi.",
    thumbnail: "https://img.youtube.com/vi/qkU9piK2bvc/hqdefault.jpg",
    playlistUrl: "https://www.youtube.com/playlist?list=PL6bMVhL_GRx7kT9Q7Kx4JrQN3kL_KB2p7",
    videos: [
      {
        title: "Introduction: Nutrition in Animals",
        url: "https://www.youtube.com/watch?v=qkU9piK2bvc",
        thumbnail: "https://img.youtube.com/vi/qkU9piK2bvc/mqdefault.jpg",
        description: "Fundamental ideas for understanding animal nutrition."
      },
      {
        title: "Human Digestive System",
        url: "https://www.youtube.com/watch?v=aLgz2rwY7bU",
        thumbnail: "https://img.youtube.com/vi/aLgz2rwY7bU/mqdefault.jpg",
        description: "In-depth exploration of the human digestive system for exams."
      }
    ]
  },
  {
    id: 4,
    title: "Class 12 English: Creative Writing Skills",
    class: "12",
    subject: "English",
    faculty: "Vedantu English Team",
    description: "Master descriptive and narrative writing skills targeting board exams.",
    thumbnail: "https://img.youtube.com/vi/4dFfD0Ud7uw/hqdefault.jpg",
    playlistUrl: "https://www.youtube.com/playlist?list=PLqM7alHXFySHYLxvXzNduZ7WYIAUIU63_",
    videos: [
      {
        title: "Descriptive Writing Techniques",
        url: "https://www.youtube.com/watch?v=4dFfD0Ud7uw",
        thumbnail: "https://img.youtube.com/vi/4dFfD0Ud7uw/mqdefault.jpg",
        description: "Learn to write vivid, board-targeted descriptions effectively."
      },
      {
        title: "Narrative Essay Writing",
        url: "https://www.youtube.com/watch?v=lA3dX9rXK0c",
        thumbnail: "https://img.youtube.com/vi/lA3dX9rXK0c/mqdefault.jpg",
        description: "Step-by-step guide to structuring a narrative essay for boards."
      }
    ]
  },
  {
    id: 5,
    title: "Class 10 Maths: Real Numbers - One Shot by Ritik Sir",
    class: "10",
    subject: "Math",
    faculty: "Ritik Sir (Physics Wallah Foundation)",
    description: "An all-in-one video covering Real Numbers to help with board preparation.",
    thumbnail: "https://img.youtube.com/vi/s7Y976auPwE/hqdefault.jpg",
    playlistUrl: "",
    videos: [
      {
        title: "REAL NUMBERS in 1 Shot: FULL CHAPTER",
        url: "https://www.youtube.com/watch?v=s7Y976auPwE",
        thumbnail: "https://img.youtube.com/vi/s7Y976auPwE/mqdefault.jpg",
        description: "Complete chapter coverage with theory and solved examples."
      }
    ]
  },
  {
    id: 6,
    title: "NEET Physics: Newton's Laws One Shot by Ummeed",
    class: "11",
    subject: "Science",
    faculty: "Ummeed (Physics Wallah)",
    description: "Complete NEET preparation with all Newton's laws and friction topics in one video.",
    thumbnail: "https://img.youtube.com/vi/2cdRXbYeCqo/hqdefault.jpg",
    playlistUrl: "",
    videos: [
      {
        title: "NEWTON'S LAWS OF MOTION & FRICTION in ONE SHOT",
        url: "https://www.youtube.com/watch?v=2cdRXbYeCqo",
        thumbnail: "https://img.youtube.com/vi/2cdRXbYeCqo/mqdefault.jpg",
        description: "Detailed concepts and previous year questions explained."
      }
    ]
  },
  {
    id: 7,
    title: "Grade 7 Science: Nutrition in Animals",
    class: "7",
    subject: "Science",
    faculty: "Instyn Education",
    description: "Class 7 foundational concepts on animal nutrition and digestion.",
    thumbnail: "https://img.youtube.com/vi/ZiuVy3X6JKI/hqdefault.jpg",
    playlistUrl: "",
    videos: [
      {
        title: "Nutrition in Animals | Class 7 Science Tutorial",
        url: "https://www.youtube.com/watch?v=ZiuVy3X6JKI",
        thumbnail: "https://img.youtube.com/vi/ZiuVy3X6JKI/mqdefault.jpg",
        description: "Explore animal digestion and nutrition in a simple way."
      }
    ]
  },
  {
    id: 8,
    title: "Class 12 English Writing Skills for Board Exams",
    class: "12",
    subject: "English",
    faculty: "Nabamita Ma'am",
    description: "Comprehensive writing skills including essays, letters, and reports for boards.",
    thumbnail: "https://img.youtube.com/vi/AauuNNigyIA/hqdefault.jpg",
    playlistUrl: "",
    videos: [
      {
        title: "Class 12 English Writing Section Tips",
        url: "https://www.youtube.com/watch?v=AauuNNigyIA",
        thumbnail: "https://img.youtube.com/vi/AauuNNigyIA/mqdefault.jpg",
        description: "Expert guidance on boosting writing scores in Class 12 exams."
      }
    ]
  }
];



// Utility to select/deselect filter options
const toggleSelection = (array, value) => {
  if (array.includes(value)) return array.filter((v) => v !== value);
  return [...array, value];
};

const CoursesList = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const navigate = useNavigate();

  // Filtering logic
  const filteredCourses = coursesData.filter(course =>
    (selectedClass.length === 0 || selectedClass.includes(course.class)) &&
    (selectedSubject.length === 0 || selectedSubject.includes(course.subject))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div>
          <span className="mr-2 font-medium">Class:</span>
          {[...Array(12)].map((_, i) => (
            <button key={i + 1} className={`px-3 py-1 m-1 rounded ${selectedClass.includes(`${i+1}`) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedClass(toggleSelection(selectedClass, `${i+1}`))}>
              {i+1}
            </button>
          ))}
        </div>

        <div>
          <span className="mr-2 font-medium">Subject:</span>
          {["Math","Science","English"].map(sub => (
            <button key={sub} className={`px-3 py-1 m-1 rounded ${selectedSubject.includes(sub) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedSubject(toggleSelection(selectedSubject, sub))}>
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white cursor-pointer"
            onClick={() => navigate(`/course/${course.id}`)}>
            <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-500 mb-1">Class: {course.class}</p>
            <p className="text-sm text-gray-500 mb-1">Faculty: {course.faculty}</p>
            <p className="text-sm text-blue-700 mb-2">{course.description}</p>
            {course.videoUrl && (
              <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:underline">
                Watch Video
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default CoursesList;
