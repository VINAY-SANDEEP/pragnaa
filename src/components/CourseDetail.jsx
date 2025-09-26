import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Class 10 Maths – Real Numbers (Magnet Brains, CBSE Board 2025)",
    class: "10",
    subject: "Math",
    faculty: "Magnet Brains Team",
    thumbnail: "https://img.youtube.com/vi/IK5pzMCSnJ4/hqdefault.jpg",
    description:
      "Full CBSE syllabus coverage with recent exam questions and solved examples.",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLVLoWQFkZbhX9NsoVF_iXbJO7o-8p3SDV",
    videos: [
      {
        title: "Introduction | Class 10 Maths Chapter 1 | CBSE 2024-25",
        url: "https://www.youtube.com/watch?v=IK5pzMCSnJ4",
        thumbnail: "https://img.youtube.com/vi/IK5pzMCSnJ4/mqdefault.jpg",
        description:
          "Real Numbers basics, prime and composite numbers, properties for board prep.",
      },
      {
        title: "Real Numbers | Class 10 Maths Chapter 1 | CBSE 2024-25",
        url: "https://www.youtube.com/watch?v=YqZvp2--kVM",
        thumbnail: "https://img.youtube.com/vi/YqZvp2--kVM/mqdefault.jpg",
        description:
          "Fundamental Theorem of Arithmetic, CBSE-focused explanations and tips.",
      },
    ],
  },
  // ... other courses
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === parseInt(id));
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!course) return <p className="text-center mt-10">Course not found</p>;

  const suggestedCourses = coursesData.filter(
    (c) => c.id !== course.id && (c.class === course.class || c.subject === course.subject)
  );

  // Function to convert normal YouTube URL into embed URL
  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // For cloudinary or other direct links
  };

  return (
    <div className="container mx-auto p-4">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Video Player */}
        <div className="flex-1">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={getEmbedUrl(course.videos[currentVideoIndex].url)}
              title={course.videos[currentVideoIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Suggested Courses */}
          {suggestedCourses.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Suggested Courses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestedCourses.map((c) => (
                  <div
                    key={c.id}
                    className="border rounded-lg shadow p-2 cursor-pointer hover:shadow-lg"
                    onClick={() => navigate(`/course/${c.id}`)}
                  >
                    <img
                      src={c.thumbnail}
                      alt={c.title}
                      className="w-full h-28 object-cover rounded mb-2"
                    />
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-gray-500">{c.faculty}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Playlist Sidebar */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Playlist</h3>
          <div className="space-y-3">
            {course.videos.map((video, index) => (
              <div
                key={index}
                className={`flex items-center p-2 border rounded cursor-pointer hover:bg-gray-100 ${
                  currentVideoIndex === index ? "bg-blue-100 border-blue-500" : ""
                }`}
                onClick={() => setCurrentVideoIndex(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-20 h-12 object-cover rounded mr-3"
                />
                <p className="text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
