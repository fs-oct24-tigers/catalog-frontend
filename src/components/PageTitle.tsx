import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageTitle: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default PageTitle;
