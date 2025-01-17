import React from 'react';
import tigerImage from '../../public/img/tiger3.png';
import creator1Image from '../../public/img/creator1.png';
import creator2Image from '../../public/img/creator2.png';
import creator3Image from '../../public/img/creator3.png';
import creator4Image from '../../public/img/creator4.png';
import creator5Image from '../../public/img/creator5.png';
import { Breadcrumbs } from '@/components/BreadCrumbs';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-2 px-4">
      <Breadcrumbs category="Contacts" />
      <h1 className="text-2xl font-bold mb-4">Creators</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
          <img
            src={creator4Image}
            alt="Creator 1"
            className="w-[200px] h-full mb-2 rounded-md"
          />
          <h2 className="text-[14px] font-semibold text-white">
            Ihor Krykunov
          </h2>
          <p className="text-[12px] text-gray-400">Team leader, developer</p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-md shadow-md">
          <img
            src={tigerImage}
            alt="Creator 2"
            className="w-36 h-36 mb-2 rounded-md"
          />
          <h2 className="text-lg font-semibold text-white">Group</h2>
          <p className="text-[32px] text-gray-400">Jun Tigers</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
          <img
            src={creator2Image}
            alt="Creator 3"
            className="w-[200px] h-full mb-2 rounded-md"
          />
          <h2 className="text-[14px] font-semibold text-white">
            Andrii Yanchuk
          </h2>
          <p className="text-[12px] text-gray-400">Developer</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
          <img
            src={creator1Image}
            alt="Creator 4"
            className="w-[200px] h-full mb-2 rounded-md"
          />
          <h2 className="text-[14px] font-semibold text-white">
            Stanislav Chyrva
          </h2>
          <p className="text-[12px] text-gray-400">Developer</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
          <img
            src={creator3Image}
            alt="Creator 5"
            className="w-[200px] h-full mb-2 rounded-md"
          />
          <h2 className="text-[14px] font-semibold text-white">
            Dmytro Fridrif
          </h2>
          <p className="text-[12px] text-gray-400">Developer</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md shadow-md">
          <img
            src={creator5Image}
            alt="Creator 6"
            className="w-[200px] h-full mb-2 rounded-md"
          />
          <h2 className="text-[14px] font-semibold text-white">
            Alyona Verbanova
          </h2>
          <p className="text-[12px] text-gray-400">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
