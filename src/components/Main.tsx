import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return <main className="max-w-xl mx-auto">{children}</main>;
};

export default Main;