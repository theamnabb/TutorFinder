import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-hero">
      <div>
        <span>
          <span>#1</span>Trusted Online Tutoring Platform
        </span>
        <h1>Personalized 1-on-1 tutoring for Every Learner Anytime AnyWhere</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          delectus, earum exercitationem modi suscipit vel culpa modi suscipit
          vel culpa
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/login">Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
