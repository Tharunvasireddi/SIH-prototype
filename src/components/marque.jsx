import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample announcements/news items
  const announcements = [
    {
      id: 1,
      type: "announcement",
      title: "New Municipal Services Available",
      description:
        "Online application for birth certificates, death certificates, and property tax payments now available.",
      date: "2024-01-15",
      priority: "high",
    },
    {
      id: 2,
      type: "news",
      title: "Road Construction Update",
      description:
        "Main Street construction will be completed by end of this month. Alternative routes available.",
      date: "2024-01-20",
      priority: "medium",
    },
    {
      id: 3,
      type: "alert",
      title: "Water Supply Maintenance",
      description:
        "Water supply will be temporarily suspended on Sunday from 6 AM to 12 PM for maintenance work.",
      date: "2024-01-25",
      priority: "high",
    },
    {
      id: 4,
      type: "event",
      title: "Community Health Camp",
      description:
        "Free health checkup camp will be organized at Central Park on 30th January from 9 AM to 5 PM.",
      date: "2024-01-28",
      priority: "medium",
    },
    {
      id: 5,
      type: "announcement",
      title: "Property Tax Payment Deadline",
      description:
        "Last date for property tax payment without penalty is 31st January. Pay online to avoid queues.",
      date: "2024-01-30",
      priority: "high",
    },
    {
      id: 6,
      type: "news",
      title: "New School Building Inauguration",
      description:
        "The new municipal school building will be inaugurated by the Mayor on 5th February at 10 AM.",
      date: "2024-02-01",
      priority: "medium",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, announcements.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white border-b border-gray-200 py-3 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-gray-700">
              NOTICE BOARD
            </h2>
          </div>

          {/* Simple Controls */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <button
              onClick={prevSlide}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title="Previous"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title="Next"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Simple Marquee Content */}
        <div className="relative">
          {/* Current Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded px-4 py-3">
            <div className="flex items-center space-x-3">
              {/* Simple Type Indicator */}
              <div className="flex-shrink-0">
                <div
                  className={`w-3 h-3 rounded-full ${
                    announcements[currentIndex].priority === "high"
                      ? "bg-red-500"
                      : announcements[currentIndex].priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {announcements[currentIndex].title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {announcements[currentIndex].type.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-1">
                  {announcements[currentIndex].description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                  <span>
                    {new Date(
                      announcements[currentIndex].date
                    ).toLocaleDateString()}
                  </span>
                  <span className="font-medium">
                    {currentIndex + 1} of {announcements.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Progress Dots */}
          <div className="flex justify-center space-x-1 mt-3">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-yellow-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Simple Scrolling Text */}
        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="flex items-center space-x-4 overflow-hidden">
            <span className="text-xs font-medium text-gray-600 flex-shrink-0">
              LATEST:
            </span>
            <div className="flex space-x-6 animate-marquee">
              {[...announcements, ...announcements].map(
                (announcement, index) => (
                  <div
                    key={`${announcement.id}-${index}`}
                    className="flex items-center space-x-2 flex-shrink-0"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        announcement.priority === "high"
                          ? "bg-red-500"
                          : announcement.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                    <span className="text-xs text-gray-700 truncate max-w-xs">
                      {announcement.title}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
