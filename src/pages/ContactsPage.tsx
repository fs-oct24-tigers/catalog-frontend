import React from 'react';
import tigerImage from '../../public/img/tiger3.png';
import { Breadcrumbs } from '@/components/BreadCrumbs';
import { CreatorCard } from '@/components/CreatorCard';
import { creators } from '@/constants';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-2 px-4">
      <Breadcrumbs category="Contacts" />
      <h1 className="text-2xl text-slate-950 dark:text-textWhite font-bold mb-4">
        Creators
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <CreatorCard
          image={creators[0].image}
          name={creators[0].name}
          role={creators[0].role}
          github={creators[0].github}
          linkedin={creators[0].linkedin}
        />

        <div className="flex flex-col items-center p-6">
          <img
            src={tigerImage}
            alt={'tiger'}
            className="w-[150px] h-[150px] mb-2 rounded-md"
          />
          <h2 className="text-[22px] font-semibold text-slate-950 dark:text-white pt-4">
            Group
          </h2>
          <p className="text-[36px] text-gray-400">Jun Tigers</p>
        </div>
        {creators.slice(1).map((creator) => (
          <CreatorCard
            key={creator.github}
            image={creator.image}
            name={creator.name}
            role={creator.role}
            github={creator.github}
            linkedin={creator.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
