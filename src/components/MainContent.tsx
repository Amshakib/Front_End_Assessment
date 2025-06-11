import React from 'react';

const overviewBoxes = [
  'ActionNotes',
  'Knowledge Base',
  'RolesAndMembers',
  'BoardGoals',
];

const priorityBoxes = [
  'AutoActionAiAgent',
  'ActionAssistAgent',
  'PlanToDo',
  'DoltNow',
];

interface MainContentProps {
  section?: 'overview' | 'priority' | 'activity' | 'analysis' | 'calender' | 'actionAnalytics' | 'knowledgeBase' | 'messenger';
}

const MainContent: React.FC<MainContentProps> = ({ section = 'overview' }) => {
  if (section === 'activity') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            My Activity
          </div>
        </div>
      </main>
    );
  }
  if (section === 'analysis') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            AnalysisPage
          </div>
        </div>
      </main>
    );
  }
  if (section === 'calender') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            CalenderPage
          </div>
        </div>
      </main>
    );
  }
  if (section === 'actionAnalytics') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            ActionAnalyticsPage
          </div>
        </div>
      </main>
    );
  }
  if (section === 'knowledgeBase') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            KnowledgeBasePage
          </div>
        </div>
      </main>
    );
  }
  if (section === 'messenger') {
    return (
      <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-3xl font-semibold text-gray-700 border border-gray-200" style={{ minHeight: '300px' }}>
            MessengerPage
          </div>
        </div>
      </main>
    );
  }
  const boxes = section === 'priority' ? priorityBoxes : overviewBoxes;
  return (
    <main className="flex-1 bg-white min-h-screen pt-16 pl-16 pr-16 flex items-stretch">
      <div className="w-full h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-0">
        {boxes.map((name) => (
          <div
            key={name}
            className="w-full h-full flex items-center justify-center bg-gray-100 rounded-none shadow text-2xl font-semibold text-gray-700 border border-gray-200"
            style={{ minHeight: '300px' }}
          >
            {name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;