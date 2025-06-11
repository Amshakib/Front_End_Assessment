import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-gray-100 border-r border-gray-200 shadow-sm flex flex-col items-center z-30">
      {/* Action Panel */}
      <div className="w-full flex flex-col items-center py-4">
        <span className="font-bold text-xs text-gray-700 mb-4">AB</span>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-200 text-purple-700 font-bold mb-2"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xs">Munshi</span>
        </button>
        {/* Dropdown */}
        {open && (
          <div className="w-48 absolute left-16 top-16 bg-white rounded-md shadow-lg border border-gray-100 z-40">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Action Board</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Calendar</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Action Analytics</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Knowledge Base</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Messenger</a>
          </div>
        )}
      </div>
      {/* Menu Items (icons/labels) */}
      <div className="flex flex-col items-center mt-4 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-gray-300" />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;