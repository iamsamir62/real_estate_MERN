import React from "react";

const Contact = () => {
  return (
    <div className="py-40">
      <div className="mt-10 grid grid-cols-2 w-11/12 mx-auto gap-10 items-center justify-center">
        <div className="border border-white p-10 bg-white">
          <div>
            <h1 className="text-4xl text-red-500">Contact Us</h1>
            <p className="mt-4">
              We're open for any suggestion or just to have a chat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 mt-10 gap-5">
            <div>
              <h2 className="font-bold text-sm">ADDRESS:</h2>
              <h3 className="mt-3 w-9/12">
                198 West 21th Street, Suite 721 New York NY 10016
              </h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">EMAIL:</h2>
              <h3 className="text-lg mt-3">info@yoursite.com</h3>
            </div>
            <div>
              <h2 className="font-bold text-sm">PHONE:</h2>
              <h3 className="text-lg mt-3">+ 1235 2355 98</h3>
            </div>
          </div>

          <div className="mt-10 grid gap-5 w-10/12">
            <input className="border p-3" type="text" placeholder="Name" />
            <input className="border p-3" type="text" placeholder="Email" />
            <input className="border p-3" type="text" placeholder="Subject" />
            <input
              className="border p-3"
              type="text"
              placeholder="Create a message here"
            />

            <div>
              <button className="bg-red-500 text-white py-2 px-2 rounded text-sm font-semibold">
                SEND MESSAGE
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h1 className="text-xl">Follow us here</h1>
            <div className="text-customgreen font-semibold text-sm flex gap-4 md:gap-10 mt-3">
              <h3>FACEBOOK</h3>
              <h3>TWITTER</h3>
              <h3>INSTAGRAM</h3>
              <h3> DRIBBBLE</h3>
            </div>
          </div>
        </div>

        <div className="h-full">
          {/* Embed Google Map using API Key */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.831834139662!2d83.44609816290587!3d27.66587570468233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1726483681881!5m2!1sen!2snp" className="w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
  
};

export default Contact;
