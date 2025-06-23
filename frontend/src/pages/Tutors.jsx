import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Button } from "@/components/ui/button";

export default function Tutors() {
  const { tutors, navigate, subjectData } = useContext(AppContext);
  const { subject: subjectParam } = useParams(); // for capturing subject from URL
  const [showFilters, setShowFilters] = useState(false);

  const handleSubjectClick = (subjectName) => {
    navigate(`/tutors/${subjectName}`);
    setShowFilters(false); // Hide filters after selection
  };

  return (
    <div className="py-28 mx-auto max-w-[1440px] px-6 lg:px-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Unlock Your Potential with Skilled Tutors
          </h2>
          <p className="text-md md:text-lg text-gray-600 leading-relaxed">
            Our platform is designed to empower professional tutors who are
            passionate about sharing knowledge and shaping futures through
            personalized education.
          </p>
        </div>

        {/* Right: Solar Animation */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-40 md:h-40 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
            <Link
              to="/"
              className="text-[24px] font-bold leading-[120%] flex items-center gap-x-1 text-tertiary"
              aria-label="TutorFinder Home"
            >
              <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary rotate-[-31deg] rounded-full">
                T
              </span>
              utorFinder
            </Link>
          </div>

          {/* Orbit Animation */}
          <div className="absolute top-1/2 left-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full border border-indigo-800 animate-spin transform -translate-x-1/2 -translate-y-1/2">
            {tutors.slice(0, 7).map((tutor, i) => {
              const angle = (360 / 7) * i;
              const rad = (angle * Math.PI) / 180;
              const radius = 140;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              return (
                <img
                  key={tutor.id}
                  src={tutor.image}
                  alt={tutor.name}
                  title={tutor.name}
                  className="absolute w-16 h-16 rounded-full border-4 border-white shadow-md object-cover cursor-pointer hover:scale-110 transition-transform"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: `translate(-50%, -50%) rotate(-${
                      (360 / 7) * i
                    }deg)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Filters Button (visible only on small screens) */}
      <div className="mt-10 sm:hidden flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          className="px-6 py-2"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          Filters
        </Button>
      </div>

      {/* Subject Tabs */}
      <div
        className={`${
          showFilters ? "flex" : "hidden sm:flex"
        } flex-col sm:flex-row flex-wrap justify-center gap-4 mt-6`}
      >
        {subjectData.map((subject, i) => (
          <Button
            onClick={() => handleSubjectClick(subject.name)}
            key={i}
            variant="secondary"
            className={`w-full sm:w-auto px-8 cursor-pointer transition-all duration-300 ${
              subject.name === subjectParam
                ? "bg-deep text-white hover:bg-deep/80"
                : ""
            }`}
          >
            {subject.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
