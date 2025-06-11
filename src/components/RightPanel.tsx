import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <aside className="fixed top-0 right-0 h-full w-16 bg-white border-l border-gray-200 shadow-sm flex flex-col items-center z-30">
      <div className="w-full flex flex-col items-center py-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow"
        />
      </div>
    </aside>
  );
};

export default RightPanel; 