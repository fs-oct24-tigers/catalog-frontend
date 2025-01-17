import React from 'react';

interface CreatorsCard {
  image: string;
  name: string;
  role: string;
  title: string;
}

export const CreatorCard: React.FC<CreatorsCard> = ({
  image,
  name,
  role,
  title,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-full mb-2 rounded-md"
      />
      <h2 className="text-[14px] font-semibold text-white">{name}</h2>
      <p className="text-[12px] text-gray-400">{role}</p>
      {title && <p className="text-[32px] text-gray-400">{title}</p>}
    </div>
  );
};
