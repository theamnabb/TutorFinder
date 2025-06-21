import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link
                      to="/"
                      className="text-[24px] font-bold leading-[120%] flex items-center gap-x-1"
                    >
                      <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary rotate-[-31deg] rounded-full">
                        T
                      </span>
                      utorFinder
                    </Link>
            <p className="text-gray-300 mb-4 max-w-md mt-5">
              Connecting students with qualified tutors across Pakistan. Quality
              education with personalized attention in anywhere.
            </p>
            <div className="flex space-x-4">
              <a
               href="tel:+923487612304"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-6 w-6 text-gray-400 hover:text-secondary cursor-pointer" />
              </a>
              <a
                href="mailto:info@tutorfinder.pk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6 text-gray-400 hover:text-secondary cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tutors" className="text-gray-300 hover:text-secondary">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link
                  to="/tutor/signup"
                  className="text-gray-300 hover:text-secondary"
                >
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-students"
                  className="text-gray-300 hover:text-secondary"
                >
                  Terms for Students
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-tutors"
                  className="text-gray-300 hover:text-secondary"
                >
                  Terms for Tutors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href="mailto:info@tutorfinder.pk"
                  className="text-gray-300 hover:underline"
                >
                  info@tutorfinder.pk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href="tel:+923487612304"
                  className="text-gray-300 hover:underline"
                >
                  +92 348 7613204
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <a
                  href="https://www.google.com/maps/search/Faisalabad,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  Faisalabad, Pakistan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-secondary">TutorFinder </span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
