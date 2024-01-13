import React, { useState } from 'react';
import Header from "../components/Header";

const BagForm = () => {
  const [formData, setFormData] = useState({
    bagtype: '',
    bagbrand: '',
    missinglocation: '',
    bagowner: '',
    bagownernumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <h2 className="mt-6 text-center text-3xl text-white">Complain of Missing Bag</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-6">

              <div>
                <label htmlFor="bagtype" className="sr-only">
                Bag Type
                </label>
                <input
                  id="bagtype"
                  name="bagtype"
                  type="text"
                  autoComplete="nabagtypeme"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Select Bag Type"
                  value={formData.bagtype}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="bagbrand" className="sr-only">
                Bag Type
                </label>
                <input
                  id="bagbrand"
                  name="bagbrand"
                  type="text"
                  autoComplete="bagbrand"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Select Bag Brand"
                  value={formData.bagbrand}
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
                <label htmlFor="bagowner" className="sr-only">
                Bag Owner
                </label>
                <input
                  id="bagowner"
                  name="bagowner"
                  type="text"
                  autoComplete="bagowner"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Bag Owner's Name"
                  value={formData.bagowner}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="bagownernumber" className="sr-only">
                Bag Owner Number
                </label>
                <input
                  id="bagownernumber"
                  name="bagownernumber"
                  type="number"
                  autoComplete="bagownernumber"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Bag Owner's Mobile Number"
                  value={formData.bagownernumber}
                  onChange={handleInputChange}
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

export default BagForm;
