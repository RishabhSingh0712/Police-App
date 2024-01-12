import React, { useState } from 'react';
import Header from "../components/Header";

const BagForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    aadhar: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    pincode: '',
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
          <h2 className="mt-6 text-center text-3xl text-white">Complain of Missing Person</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-1 gap-6">

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Missing Person Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="Age" className="sr-only">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Missing Person Age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="date" className="sr-only">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="string"
                  autoComplete="date"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Missing Date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                  <label htmlFor="gender" className="sr-only">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Enter Person Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                <label htmlFor="height" className="sr-only">
                  Height
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  autoComplete="height"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Person Height (in CM)"
                  value={formData.height}
                  onChange={handleInputChange}
                />
              </div>
                <div>
                <label htmlFor="weight" className="sr-only">
                  Weight
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  autoComplete="weight"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Person Weight (in kg)"
                  value={formData.weight}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="state" className="sr-only">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="address-level1"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="pincode" className="sr-only">
                  Pin Code
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="number"
                  autoComplete="postal-code"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Pin Code"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="realtivename" className="sr-only">
                Realtive name
                </label>
                <input
                  id="realtivename"
                  name="realtivename"
                  type="text"
                  autoComplete="realtivename"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Person's Relative Name"
                  value={formData.realtivename}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="realtiveemail" className="sr-only">
                Realtive email
                </label>
                <input
                  id="realtiveemail"
                  name="realtiveemail"
                  type="text"
                  autoComplete="realtiveemail"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Person's Relative Email"
                  value={formData.realtiveemail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="mobile" className="sr-only">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  autoComplete="tel"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 rounded-b-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Person's Relative Number"
                  value={formData.mobile}
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
