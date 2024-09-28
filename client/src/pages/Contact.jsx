import React from "react";

const Contact = () => {
  return (
    <div className="py-20 md:py-40">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 items-center justify-center">
        
        {/* Contact Form Section */}
        <div className="border border-white p-8 md:p-10 bg-white shadow-md">
          <div>
            <h1 className="text-3xl md:text-4xl text-red-500 font-semibold">Contact Us</h1>
            <p className="mt-4 text-sm md:text-base">
              We're open for any suggestion or just to have a chat.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
            <div>
              <h2 className="font-bold text-sm">ADDRESS:</h2>
              <h3 className="mt-3 text-gray-600 text-sm md:text-base">
                198 West 21th Street, Suite 721 New York NY 10016
              </h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">EMAIL:</h2>
              <h3 className="mt-3 text-gray-600 text-sm md:text-base">
                info@yoursite.com
              </h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">PHONE:</h2>
              <h3 className="mt-3 text-gray-600 text-sm md:text-base">
                + 1235 2355 98
              </h3>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="mt-10 grid gap-4 w-full">
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              placeholder="Email"
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Create a message here"
              rows="4"
            />

            {/* Send Button */}
            <div>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm font-semibold transition-all duration-200 ease-in-out">
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="mt-12">
            <h1 className="text-lg md:text-xl">Follow us here</h1>
            <div className="text-customgreen font-semibold text-sm flex gap-4 md:gap-10 mt-3">
              <a href="#" className="hover:underline">FACEBOOK</a>
              <a href="#" className="hover:underline">TWITTER</a>
              <a href="#" className="hover:underline">INSTAGRAM</a>
              <a href="#" className="hover:underline">DRIBBBLE</a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="h-96 md:h-full shadow-lg">
          {/* Embed Google Map using API Key */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.831834139662!2d83.44609816290587!3d27.66587570468233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1726483681881!5m2!1sen!2snp"
            className="w-full h-full rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
