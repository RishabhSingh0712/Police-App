import React, { useState } from 'react';
import Header from './Header';

const Complaint = () => {
  const [complaintData, setComplaintData] = useState({
    name: '',
    place: '',
    missingDate: '',
    lastSeenDate: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintData({ ...complaintData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setComplaintData({ ...complaintData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle complaint submission, including image upload
    console.log('Complaint submitted:', complaintData);
    // You can add your logic here to handle complaint submission, including image upload to a server
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-600 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl text-white">
            Complaint Section
          </h2>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                  value={complaintData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="place" className="sr-only">
                  Place
                </label>
                <input
                  id="place"
                  name="place"
                  type="text"
                  autoComplete="place"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Place"
                  value={complaintData.place}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="missingDate" className="sr-only">
                  Missing Date
                </label>
                <input
                  id="missingDate"
                  name="missingDate"
                  type="date"
                  autoComplete="bday"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Missing Date"
                  value={complaintData.missingDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastSeenDate" className="sr-only">
                  Last Seen Date
                </label>
                <input
                  id="lastSeenDate"
                  name="lastSeenDate"
                  type="date"
                  autoComplete="bday"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Seen Date"
                  value={complaintData.lastSeenDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Description"
                  value={complaintData.description}
                  onChange={handleInputChange}
                ></textarea>
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
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Complaint;
