import React, { useState } from 'react';
import Header from "../components/Header";

const VechileForm = () => {
  const [formData, setFormData] = useState({
    vehicletype: '',
    vehiclenumber: '',
    missingdate: '',
    vehiclebrand: '',
    vehiclecolor: '',
    vehiclemodal: '',
    enginenumber: '',
    chassisnumber: '',
    missinglocation: '',
    vehicleowner: '',
    vehicleownermobilenumber: '',
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
          <h2 className="mt-6 text-center text-3xl text-white">Complain of Missing Vehicle</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-6">

              <div>
                <label htmlFor="vehicletype" className="sr-only">
                Vehicle Type
                </label>
                <input
                  id="vehicletype"
                  name="vehicletype"
                  type="text"
                  autoComplete="vehicletype"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Missing Vehicle Type"
                  value={formData.vehicletype}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="vehiclenumber" className="sr-only">
                Vehicle Number
                </label>
                <input
                  id="vehiclenumber"
                  name="vehiclenumber"
                  type="text"
                  autoComplete="vehiclenumber"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Missing Vehicle Number"
                  value={formData.vehiclenumber}
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
                <label htmlFor="vehiclebrand" className="sr-only">
                Vehicle Brand
                </label>
                <input
                  id="vehiclebrand"
                  name="vehiclebrand"
                  type="text"
                  autoComplete="vehiclebrand"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Brand"
                  value={formData.vehiclebrand}
                  onChange={handleInputChange}
                />
              </div>
                <div>
                <label htmlFor="vehiclecolor" className="sr-only">
                Vehicle Color
                </label>
                <input
                  id="vehiclecolor"
                  name="vehiclecolor"
                  type="text"
                  autoComplete="vehiclecolor"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Color"
                  value={formData.vehiclecolor}
                  onChange={handleInputChange}
                />
              </div>
                <div>
                <label htmlFor="vehiclemodal" className="sr-only">
                Vehicle Modal
                </label>
                <input
                  id="vehiclemodal"
                  name="vehiclemodal"
                  type="text"
                  autoComplete="vehiclemodal"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Modal"
                  value={formData.vehiclemodal}
                  onChange={handleInputChange}
                />
              </div>
                <div>
                <label htmlFor="enginenumber" className="sr-only">
                Engine Number
                </label>
                <input
                  id="enginenumber"
                  name="enginenumber"
                  type="text"
                  autoComplete="enginenumber"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Engine Number"
                  value={formData.enginenumber}
                  onChange={handleInputChange}
                />
              </div>
                <div>
                <label htmlFor="chassisnumber" className="sr-only">
                Chassis Number
                </label>
                <input
                  id="chassisnumber"
                  name="chassisnumber"
                  type="text"
                  autoComplete="chassisnumber"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Chassis Number"
                  value={formData.chassisnumber}
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
                  placeholder="Enter Vehicle Missing Location"
                  value={formData.missinglocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="vehicleowner" className="sr-only">
                Vehicle Owner
                </label>
                <input
                  id="vehicleowner"
                  name="vehicleowner"
                  type="text"
                  autoComplete="vehicleowner"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Owner Name"
                  value={formData.vehicleowner}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="vehicleownermobilenumber" className="sr-only">
                Vehicle Owner Mobile Number
                </label>
                <input
                  id="vehicleownermobilenumber"
                  name="vehicleownermobilenumber"
                  type="number"
                  autoComplete="tel"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 rounded-b-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Vehicle Owner Mobile Number"
                  value={formData.vehicleownermobilenumber}
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

export default VechileForm;
