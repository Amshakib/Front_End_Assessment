import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import RightPanel from './RightPanel';
import MainContent from './MainContent';

const tabSections = {
  Overview: 'overview',
  Priority: 'priority',
  Activity: 'activity',
  Analysis: 'analysis',
};

type TabKey = keyof typeof tabSections;

type SectionKey = 'overview' | 'priority' | 'activity' | 'analysis' | 'calender' | 'actionAnalytics' | 'knowledgeBase' | 'messenger';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Overview');
  const [section, setSection] = useState<SectionKey>('overview');

  const handleSetActiveTab = (tab: string) => {
    if (tab in tabSections) {
      setActiveTab(tab as TabKey);
      setSection(tabSections[tab as TabKey] as SectionKey);
    }
  };

  // For dropdown: setSection('calender'), setSection('actionAnalytics'), etc.

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Sidebar />
      <Navbar activeTab={activeTab} setActiveTab={handleSetActiveTab} setSection={setSection} />
      <RightPanel />
      <div className="pl-16 pr-16 pt-16">
        <MainContent section={section} />
      </div>
    </div>
  );
};

export default AppLayout; 