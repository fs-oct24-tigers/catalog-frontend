import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="max-w-xl mx-auto relative px-4 sm:px-6 xl:px-8 pb-20 md:pb-16">
      {children}
    </main>
  );
};

export default Main;
