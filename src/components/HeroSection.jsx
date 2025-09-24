import { useEffect, useState } from "react";

const images = [
  "https://www.edustoke.com/blog/wp-content/uploads/2020/05/Punjab-Public-.jpg", // students learning
  "https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=", // classroom
  "https://assets.thehansindia.com/h-upload/2020/12/15/1018529-elearning.webp", // e-learning
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="text-yellow-400">Pragnaa E-Learning</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Learn anytime, anywhere with our interactive courses and modern
          learning platform.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-2xl shadow-lg hover:bg-white/30 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
