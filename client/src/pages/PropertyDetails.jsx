import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio, Blocks } from "react-loader-spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("this field is required"),
  phone: yup.number().required("this field is required"),
  address: yup.string().required("this field is required"),
});
const PropertyDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Data, setData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/room/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouse(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHouse();
  }, [id, isBookingModalOpen]);
  const booked = house && house.status === "booked";

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const handleInputChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNowClick = async () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };
  console.log(house);

  const handleSubmit = async (e, resetForm) => {
    try {
      const response = await fetch(
        `http://localhost:5000/room/booking/${house._id}/${user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(e),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to  booking.");
      }

      const result = await response.json();
      console.log("Booking successful:", result);
      setIsBookingModalOpen(false);
      resetForm();
      toast("Booking Successful !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setData({});
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (loading) {
    return (
      <div
        className="
    flex justify-center items-center
     h-screen w-screen
    "
      >
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!house) {
    return <div>No house found</div>;
  }

  return (
    <div className="bg-white flex flex-col gap-20">
      {console.log(house, "dsdd")}
      <div className="h-96 bg-red-500 relative">
        <img
          src={`https://images.unsplash.com/photo-1559841644-08984562005a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Room <span className="text-red-600">Details</span>
          </h1>
        </div>
      </div>

      <div className="  w-11/12 mx-auto bg-white rounded-lg py-14  grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
          {house.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={`http://localhost:5000/${image}`}
                alt={`${house.name} ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImageModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Preview"
                className="max-w-full max-h-full rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400 transition-colors"
                onClick={closeImageModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className=" px-10 flex  flex-col gap-5 shadow-lg ">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-serif text-gray-600">Description:</h1>
            <h2 className="">{house.description}</h2>
          </div>
          <div className="text-lg leading-8">
            <div className="text-xl font-medium text-gray-700 ">
              {house.name}
            </div>

            {house.type === "Flat" && (
              <div className="flex gap-4 text-xl">
                <div className="text-gray-600">{house.type}</div>
                <div className="flex items-center text-slate-500 gap-1">
                  <div className="text-[20px]">
                    <BiBed />
                  </div>
                  <div>{house.bedrooms}</div>
                </div>
                <div className="flex items-center text-slate-500 gap-1">
                  <div className="text-[20px]">
                    <BiBath />
                  </div>
                  <div>{house.bathrooms}</div>
                </div>
                {/* <div className="flex items-center text-slate-500 gap-1">
                  <div className="text-[20px]">
                    <BiArea />
                  </div>
                  <div>{house.surface}</div>
                </div> */}
              </div>
            )}
            <div>
              <div className="flex items-center gap-5 mt-5">
                <h1 className="text-xl font-serif text-gray-600">Location:</h1>
                <div className="bg-green-500 text-white rounded-full px-3 py-1 inline-block mb-3">
                  {house.address}
                </div>
              </div>
              <div className="text-lg text-gray-600 flex gap-5 items-center">
                <h1 className="text-xl font-serif">Owner name:</h1>
                <div className="text-xl font-mono font-semibold bg-blue-300 rounded-full text-white px-3 py-1">
                  {house.ownerName}
                </div>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <h1 className="text-xl font-serif text-gray-600">Price:</h1>
                <div className="text-xl font-semibold  rounded-full  inline-block ">
                  Rs {house.price} /month
                </div>
              </div>
            </div>
            <div className="mt-5  bg-red-600 text-white inline-block rounded-md px-4 py-1">
              <button
                className={`${
                  booked ? "cursor-not-allowed" : "cursor-pointer"
                } text-xl font-mono`}
                onClick={handleBookNowClick}
                disabled={booked}
              >
                {booked ? "Booked" : "Book Now"}
              </button>
            </div>
          </div>
        </div>

        {isBookingModalOpen && (
          <Formik
            initialValues={{
              name: "",
              phone: "",
              address: "",
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              handleSubmit(values, resetForm);
            }}
          >
            {({ handleSubmit }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                    <div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          name="name"
                        />
                        <ErrorMessage
                          className="text-red-500 first-letter:capitalize animate-bounce"
                          component={"div"}
                          name="name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Phone
                        </label>
                        <Field
                          type="number"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          name="phone"
                        />
                        <ErrorMessage
                          className="text-red-500 first-letter:capitalize animate-bounce"
                          component={"div"}
                          name="phone"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Address
                        </label>
                        <Field
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          name="address"
                        />
                        <ErrorMessage
                          className="text-red-500 first-letter:capitalize animate-bounce"
                          component={"div"}
                          name="address"
                        />
                      </div>
                      <div className="flex justify-between">
                        <button
                          type="button"
                          className="bg-gray-400 text-white px-4 py-2 rounded-md"
                          onClick={closeBookingModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
