import React, { useState } from "react";
import Header from "../components/Header";

const PetForm = () => {
  const [formData, setFormData] = useState({
    petbreed: "",
    petcolor: "",
    missinglocation: "",
    missingdate: "",
    petowner: "",
    petownernumber: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center overflow-hidden max-h-full bg-gray-600 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 overflow-y-auto">
          <div>
            <h2 className="mt-6 text-center text-3xl text-white">
              Complain of Missing Pet
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="petbreed" className="sr-only">
                    Pet Breed
                  </label>
                  <input
                    id="petbreed"
                    name="petbreed"
                    type="text"
                    autoComplete="petbreed"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Pet Breed"
                    value={formData.petbreed}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="petcolor" className="sr-only">
                    petcolor
                  </label>
                  <input
                    id="petcolor"
                    name="petcolor"
                    type="text"
                    autoComplete="petcolor"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Pet Color"
                    value={formData.petcolor}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="missinglocation" className="sr-only">
                    Missing Location
                  </label>
                  <input
                    id="missinglocation"
                    name="missinglocation"
                    type="text"
                    autoComplete="missinglocation"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Missing Location"
                    value={formData.missinglocation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="missingdate" className="sr-only">
                    Missing Date
                  </label>
                  <input
                    id="missingdate"
                    name="missingdate"
                    type="text"
                    autoComplete="missingdate"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Missing Date"
                    value={formData.missingdate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="petowner" className="sr-only">
                    Pet Owner
                  </label>
                  <input
                    id="petowner"
                    name="petowner"
                    type="text"
                    autoComplete="petowner"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Pet Owner's Name"
                    value={formData.petowner}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="petownernumber" className="sr-only">
                    Pet Owner Number
                  </label>
                  <input
                    id="petownernumber"
                    name="petownernumber"
                    type="number"
                    autoComplete="petownernumber"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Pet Owner's Number"
                    value={formData.petownernumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="image" className="sr-only">
                    Upload Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Pet Pictures"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PetForm;
