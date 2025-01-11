import React from 'react';

const HomeSectionCard = ({ imageUrl, brand, title }) => {
  const maxTitleLength = 50; // Set the maximum length for the title
  const truncatedTitle =
    title.length > maxTitleLength ? title.slice(0, maxTitleLength) + '...' : title;

  return (
    <div className='cursor-pointer flex flex-col items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem] flex items-center justify-center'>
        <img
          className='object-cover max-h-full max-w-full'
          src={imageUrl}
          alt=''
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-white'>{brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{truncatedTitle}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
