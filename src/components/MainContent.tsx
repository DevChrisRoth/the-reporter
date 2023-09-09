import React from "react";

export const MainContent: React.FC = ({ children }: any) => {
  return (
    <div className="flex flex-col bg-white max-w-790 w-full rounded-lg p-8 mb-8">
      {children}
    </div>
  );
};
