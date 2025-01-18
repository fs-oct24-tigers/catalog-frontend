import React from 'react';
import tigerImage from '../../public/img/tiger3.png';
import creator1Image from '../../public/img/creator1.png';
import creator2Image from '../../public/img/creator2.png';
import creator3Image from '../../public/img/creator3.png';
import creator4Image from '../../public/img/creator4.png';
import creator5Image from '../../public/img/creator5.png';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { CreatorCard } from '@/components/CreatorCard';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-2 px-4">
      <Breadcrumbs category="Contacts" />
      <h1 className="text-2xl font-bold mb-4">Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <CreatorCard
          image={creator4Image}
          name="Ihor Krykunov"
          role="Team leader, developer"
          title=""
        />

        <div className="flex flex-col items-center p-6">
          <img
            src={tigerImage}
            alt={'tiger'}
            className="w-[150px] h-[150px] mb-2 rounded-md"
          />
          <h2 className="text-[22px] font-semibold text-white pt-4">Group</h2>
          <p className="text-[36px] text-gray-400">Jun Tigers</p>
        </div>
        <CreatorCard
          image={creator2Image}
          name="Andrii Yanchuk"
          role="Developer"
          title=""
        />
        <CreatorCard
          image={creator1Image}
          name="Stanislav Chyrva"
          role="Developer"
          title=""
        />
        <CreatorCard
          image={creator3Image}
          name="Dmytro Fridrif"
          role="Developer"
          title=""
        />
        <CreatorCard
          image={creator5Image}
          name="Alyona Verbanova"
          role="Developer"
          title=""
        />
      </div>
    </div>
  );
};

export default ContactsPage;
