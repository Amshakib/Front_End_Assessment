import React, { useState } from 'react';

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
];

const tabs = ['Overview', 'Priority', 'Activity', 'Analysis'];

const profileAvatar = 'https://randomuser.me/api/portraits/men/32.jpg';

type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSection: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, setSection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm w-full">
      {/* Left Section: Profile Icon, Dropdown, Avatars */}
      <div className="flex items-center space-x-3 min-w-0">
        {/* Profile Icon */}
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-lg font-bold text-gray-700">
          AB
        </div>
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md min-w-[200px] border border-gray-300"
          >
            <span className="truncate text-base font-medium">Munshi Group / Action-Board</span>
            <svg
              className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-100">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => { setSection('overview'); setIsDropdownOpen(false); }}>Action Board</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => { setSection('calender'); setIsDropdownOpen(false); }}>Calendar</a>
              <div className="border-t border-gray-100 my-1"></div>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => { setSection('actionAnalytics'); setIsDropdownOpen(false); }}>Action Analytics</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => { setSection('knowledgeBase'); setIsDropdownOpen(false); }}>Knowledge Base</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => { setSection('messenger'); setIsDropdownOpen(false); }}>Messenger</a>
            </div>
          )}
        </div>
        {/* Avatars */}
        <div className="flex items-center space-x-[-10px] ml-2">
          {avatars.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-white shadow -ml-2 first:ml-0"
            />
          ))}
        </div>
      </div>

      {/* Center Section: Navigation Tabs */}
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-gray-700 font-medium cursor-pointer px-2 py-1 border-b-2 transition-all duration-150 ${
                activeTab === tab
                  ? 'border-black font-bold text-black'
                  : 'border-transparent hover:border-black hover:text-black'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section: Knowledge Base search, icons, profile avatar */}
      <div className="flex items-center space-x-3 min-w-0">
        {/* Knowledge Base search field */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Knowledge Base…"
            className="pl-10 pr-3 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400"
          />
        </div>
        {/* Two square icon buttons */}
        <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" />
          </svg>
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" />
          </svg>
        </button>
        {/* Profile avatar */}
        <img
          src={profileAvatar}
          alt="profile"
          className="w-9 h-9 rounded-full border-2 border-white shadow ml-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;