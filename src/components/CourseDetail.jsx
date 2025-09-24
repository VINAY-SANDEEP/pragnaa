import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const coursesData = [
  {
    id: 1,
    title: "Class 10 Maths – Real Numbers (Magnet Brains, CBSE Board 2025)",
    class: "10",
    subject: "Math",
    faculty: "Magnet Brains Team",
    thumbnail: "https://img.youtube.com/vi/IK5pzMCSnJ4/hqdefault.jpg",
    description: "Full CBSE syllabus coverage with recent exam questions and solved examples.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLVLoWQFkZbhX9NsoVF_iXbJO7o-8p3SDV",
    videos: [
      {
        title: "Introduction | Class 10 Maths Chapter 1 | CBSE 2024-25",
        url: "https://www.youtube.com/watch?v=IK5pzMCSnJ4",
        thumbnail: "https://img.youtube.com/vi/IK5pzMCSnJ4/mqdefault.jpg",
        description: "Real Numbers basics, prime and composite numbers, properties for board prep."
      },
      {
        title: "Real Numbers | Class 10 Maths Chapter 1 | CBSE 2024-25",
        url: "https://www.youtube.com/watch?v=YqZvp2--kVM",
        thumbnail: "https://img.youtube.com/vi/YqZvp2--kVM/mqdefault.jpg",
        description: "Fundamental Theorem of Arithmetic, CBSE-focused explanations and tips."
      }
    ]
  },
  {
    id: 2,
    title: "NEET Physics – Laws of Motion (Physics Wallah, 2025)",
    class: "11",
    subject: "Science",
    faculty: "Physics Wallah Team",
    thumbnail: "https://img.youtube.com/vi/6G-lMfzpVUA/hqdefault.jpg",
    description: "Complete NEET/JEE coverage, theory + PYQs, timed revision segments.",
    playlistUrl: "https://www.youtube.com/c/PhysicsWallah/playlists",
    videos: [
      {
        title: "LAWS OF MOTION in 1 Shot || Prachand NEET 2025",
        url: "https://www.youtube.com/watch?v=dgE1qMUJ4ZA",
        thumbnail: "https://img.youtube.com/vi/dgE1qMUJ4ZA/mqdefault.jpg",
        description: "NEET Physics Laws of Motion, all concepts and previous year questions covered."
      },
      {
        title: "Newtons Law of Motion - Complete Chapter in One Video",
        url: "https://www.youtube.com/watch?v=PTWgCLmdcaA",
        thumbnail: "https://img.youtube.com/vi/PTWgCLmdcaA/mqdefault.jpg",
        description: "One-shot revision – Newton’s Laws, equilibrium, forces and PYQs."
      }
    ]
  },
  {
    id: 3,
    title: "Grade 8 Science – Nutrition in Animals (Khan Academy India)",
    class: "8",
    subject: "Science",
    faculty: "Khan Academy Team",
    thumbnail: "https://img.youtube.com/vi/SNGEJIX5A1c/hqdefault.jpg",
    description: "Animated explainer videos, NCERT concepts, revision for school/Olympiads.",
    playlistUrl: "https://www.khanacademy.org/science/ncert-class-7-science/xcdd360a2d881eb3c:nutrition-in-animals",
    videos: [
      {
        title: "Digestion in Herbivores | Nutrition in Animals | Grade 7",
        url: "https://www.youtube.com/watch?v=SNGEJIX5A1c",
        thumbnail: "https://img.youtube.com/vi/SNGEJIX5A1c/mqdefault.jpg",
        description: "Animated walkthrough of digestion in cows, buffaloes, ruminants (aligned for CBSE/NCERT)."
      },
      {
        title: "Feeding in Birds and Cows | Life Processes in Animals",
        url: "https://www.youtube.com/watch?v=ZYPnhsZjp4Q",
        thumbnail: "https://img.youtube.com/vi/ZYPnhsZjp4Q/mqdefault.jpg",
        description: "How cows and birds eat and digest food. Nature’s unique mechanisms explained."
      }
    ]
  },
  {
    id: 4,
    title: "Class 12 English – Creative Writing Skills (CBSE Boards 2025)",
    class: "12",
    subject: "English",
    faculty: "Sunil Panda-The Educator / English Teams",
    thumbnail: "https://img.youtube.com/vi/IpY9gr88u-4/hqdefault.jpg",
    description: "Board-centric writing format breakdown, hacks, and comprehensive scoring strategies.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLqM7alHXFySHYLxvXzNduZ7WYIAUIU63_",
    videos: [
      {
        title: "ONE SHOT | Class 12th English Boards 2025",
        url: "https://www.youtube.com/watch?v=IpY9gr88u-4",
        thumbnail: "https://img.youtube.com/vi/IpY9gr88u-4/mqdefault.jpg",
        description: "Essential formats for essay, article, report, notice – all in one board revision video."
      },
      {
        title: "Class 12 English Writing Section | Boards 2024",
        url: "https://www.youtube.com/watch?v=AauuNNigyIA",
        thumbnail: "https://img.youtube.com/vi/AauuNNigyIA/mqdefault.jpg",
        description: "Latest expert tips and strategies for maximum scoring in CBSE Writing Section."
      }
    ]
  }
];



const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === parseInt(id));
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!course) return <p className="text-center mt-10">Course not found</p>;

  // Suggested courses (same class or subject, not current)
  const suggestedCourses = coursesData.filter(
    c => c.id !== course.id && (c.class === course.class || c.subject === course.subject)
  );

  return (
    <div className="container mx-auto p-4">
      <button className="mb-4 text-blue-500" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Main Video Player */}
        <div className="flex-1">
          <ReactPlayer
            url={course.videos[currentVideoIndex].url}
            controls
            playing
            width="100%"
            onEnded={() => {
              if (currentVideoIndex < course.videos.length - 1) setCurrentVideoIndex(currentVideoIndex + 1);
            }}
          />

          {/* Suggested Courses */}
          {suggestedCourses.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Suggested Courses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestedCourses.map(c => (
                  <div
                    key={c.id}
                    className="border rounded-lg shadow p-2 cursor-pointer hover:shadow-lg"
                    onClick={() => navigate(`/course/${c.id}`)}
                  >
                    <img src={c.thumbnail} alt={c.title} className="w-full h-28 object-cover rounded mb-2" />
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
                <img src={video.thumbnail} alt={video.title} className="w-20 h-12 object-cover rounded mr-3" />
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
