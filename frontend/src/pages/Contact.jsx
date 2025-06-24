import React from "react";
import { Mail, MapPin, Phone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <div className="max-w-[1440px] px-6 lg:px-12 mx-auto py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have a question, feedback, or just want to say hello? Fill out the
            form and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-deep"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-deep"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-deep"
                placeholder="Your message..."
              ></textarea>
            </div>

            <Button
              variant="secondary"
              type="submit"
              className="px-6 py-2 rounded-md hover:bg-deep  hover:text-white cursor-pointer transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className=" p-6 rounded-lg shadow">
          <h3 className="text-3xl font-semibold mb-4">Contact Details</h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out through any of the following ways and
            we'll get back to you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Faisalabad, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@tutorfinder.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Headphones className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Support</p>
                <p className="text-gray-600">24 / 7 support in open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
