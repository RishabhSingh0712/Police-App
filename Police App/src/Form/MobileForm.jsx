import React, { useState } from 'react';
import Header from "../components/Header";

const MobileForm = () => {
  const [formData, setFormData] = useState({
    mobilemodel: '',
    imei1: '',
    imei2: '',
    missinglocation: '',
    missingdate: '',
    mobileownername: '',
    ownermobilenumber: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center overflow-hidden max-h-full bg-gray-600 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 overflow-y-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl text-white">Complain of Missing Mobile</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-6">

              <div>
                <label htmlFor="mobilemodel" className="sr-only">
                Mobile Model
                </label>
                <input
                  id="mobilemodel"
                  name="mobilemodel"
                  type="text"
                  autoComplete="mobilemodel"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Select Mobile Model"
                  value={formData.mobilemodel}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="imei1" className="sr-only">
                IMEI 1
                </label>
                <input
                  id="imei1"
                  name="imei1"
                  type="text"
                  autoComplete="imei1"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter IMEI 1 Number"
                  value={formData.imei1}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="imei2" className="sr-only">
                  IMEI 2
                </label>
                <input
                  id="imei2"
                  name="imei2"
                  type="text"
                  autoComplete="imei2"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter IMEI 2 Number"
                  value={formData.imei2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="missinglocation" className="sr-only">
                Missing Loaction
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
                <label htmlFor="mobileownername" className="sr-only">
                Mobile Owner Name
                </label>
                <input
                  id="mobileownername"
                  name="mobileownername"
                  type="text"
                  autoComplete="mobileownername"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Mobile Owner's Name"
                  value={formData.mobileownername}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="ownermobilenumber" className="sr-only">
                Owner Mobile Number
                </label>
                <input
                  id="ownermobilenumber"
                  name="ownermobilenumber"
                  type="number"
                  autoComplete="tel"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 rounded-b-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Owner's Mobile Number"
                  value={formData.ownermobilenumber}
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
                    placeholder="Enter Mobile Pictures"
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

export default MobileForm;
