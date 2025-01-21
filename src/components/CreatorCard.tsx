import React from 'react';

interface CreatorsCard {
  image: string;
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export const CreatorCard: React.FC<CreatorsCard> = ({
  image,
  name,
  role,
  github,
  linkedin,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md border border-gray-800 hover:border-textGray cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-full mb-2 rounded-md"
      />
      <h2 className="text-[14px] font-semibold text-white">{name}</h2>
      <p className="text-[12px] text-gray-400">{role}</p>
      <a
        target="_blank"
        href={github}
        className="text-[12px] underline"
        rel="noreferrer"
      >
        GitHub Profile
      </a>
      <a
        target="_blank"
        href={linkedin}
        className="text-[12px] underline"
        rel="noreferrer"
      >
        Linkedin Profile
      </a>
    </div>
  );
};
