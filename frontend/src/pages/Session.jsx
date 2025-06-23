import { AppContext } from "@/context/AppContext";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";

const Session = () => {
  const { tutId } = useParams();
  const { tutors } = useContext(AppContext);
  const [tutorInfo, setTutorInfo] = useState(null);

  useEffect(() => {
    if (tutors?.length > 0 && tutId) {
      const tutor = tutors.find((t) => t._id === tutId);
      setTutorInfo(tutor);
    }
  }, [tutors, tutId]);

  if (!tutorInfo) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-[1fr_2fr] 
          gap-x-12 
          gap-y-8
        "
      >
        {/* Image Section */}
        <div className="relative w-full h-72 md:h-[444px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={tutorInfo.image}
            alt={`${tutorInfo.name} image`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-start gap-6">
          {/* Name, Qualification, Availability */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-full">
            <div>
              <h3 className="text-3xl font-bold text-black">
                {tutorInfo.name}
              </h3>
              <h5 className="font-semibold text-gray-600 mt-1">
                {tutorInfo.qualification}
              </h5>
            </div>
            <span
              className={`
                mt-4 sm:mt-0
                inline-flex items-center px-4 py-1 rounded-full text-sm font-medium
                ${
                  tutorInfo.available
                    ? "bg-green-100 text-green-800 ring-1 ring-green-500"
                    : "bg-red-100 text-red-800 ring-1 ring-red-500"
                }
              `}
            >
              <span
                className={`mr-2 inline-block h-3 w-3 rounded-full ${
                  tutorInfo.available ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {tutorInfo.available ? "Available" : "Unavailable"}
            </span>
          </div>

          {/* Experience, Subject, Fee */}
          <div
            className="
              flex 
              flex-col 
              sm:flex-row 
              sm:justify-between 
              max-w-md 
              gap-6 
              border-gray-200
              border
              rounded-xl 
              p-5
             bg-indigo-10 shadow-sm
              text-black
            "
          >
            <div className="flex flex-col items-center sm:items-start">
              <h5 className="font-semibold text-lg mb-1">Experience</h5>
              <p className="text-terinary">{tutorInfo.experience}</p>
            </div>
            <div className="hidden sm:block border-l border-black" />
            <div className="flex flex-col items-center sm:items-start">
              <h5 className="font-semibold text-lg mb-1">Subject</h5>
              <p className="text-terinary">{tutorInfo.subject}</p>
            </div>
            <div className="hidden sm:block border-l border-black" />
            <div className="flex flex-col items-center sm:items-start">
              <h5 className="font-semibold text-lg mb-1">Fee</h5>
              <p className="text-terinary">{tutorInfo.fee} / 30 mins</p>
            </div>
          </div>

          {/* Location */}
          <div className="max-w-sm flex items-center gap-3 text-gray-700 mt-6">
            <MapPin className="w-6 h-6 text-black" />
            <div className="flex items-center ">
              <h5 className="font-semibold text-black mb-0 mr-2">Location:</h5>
              <p className="text-sm mb-0">
                {tutorInfo.location?.city || "City Unknown"},{" "}
                {tutorInfo.location?.country || "Country Unknown"}
              </p>
            </div>
          </div>

          <hr className="my-2 border-gray-300" />

          {/* About */}
          <div className="max-w-3xl">
            <h4 className="text-xl font-bold mb-2">About Me</h4>
            <p className="text-gray-700 leading-relaxed">{tutorInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
