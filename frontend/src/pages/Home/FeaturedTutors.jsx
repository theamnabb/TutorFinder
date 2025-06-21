import React from "react";
import tutorFemale from "../../assets/tutors/tutor-female.png";
import tutorMale from "../../assets/tutors/tutor-male.png";

const FeaturedTutors = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14 xl:py-16">
      <div className="max-w-xl mx-auto text-center pb-16">
        {/* Row: Text + Avatars */}
        <div className="inline-flex items-center justify-center gap-4 flex-wrap font-bold text-xl md:text-2xl capitalize">
          <span>Made For Professionals</span>

          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            <img
              src={tutorFemale}
              alt="Tutor 1"
              width={44}
              height={44}
              className="rounded-full ring-2 ring-white shadow object-cover aspect-square"
            />
            <img
              src={tutorFemale}
              alt="Tutor 2"
              width={44}
              height={44}
              className="rounded-full ring-2 ring-white shadow object-cover aspect-square"
            />
            <img
              src={tutorFemale}
              alt="Tutor 3"
              width={44}
              height={44}
              className="rounded-full ring-2 ring-white shadow object-cover aspect-square"
            />
          </div>
          Delivering quality education
        </div>
        <p className="text-tertiary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque quam alias assumenda facere rerum unde iure placeat. </p>
      </div> 
      {/* Container for Professonal tutors  */}
      <div></div>
    </section>
  );2
};

export default FeaturedTutors;
