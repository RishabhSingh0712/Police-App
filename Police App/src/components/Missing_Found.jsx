import React from 'react';
import Header from './Header';

const Missing_Found = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-center my-32">
        <button className="bg-yellow-500 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded mr-[45rem]">
          Missing
        </button>
        <button className="bg-yellow-500 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
          Found
        </button>
      </div>
    </div>
  );
};

export default Missing_Found;




