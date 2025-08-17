import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ResumeEditor } from './components/ResumeEditor';
import { Analytics } from './components/Analytics';
import { JobTargeting } from './components/JobTargeting';
import { RecruiterView } from './components/RecruiterView';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ResumeProvider } from './contexts/ResumeContext';

type ViewType = 'dashboard' | 'editor' | 'analytics' | 'targeting' | 'recruiter';

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'editor':
        return <ResumeEditor />;
      case 'analytics':
        return <Analytics />;
      case 'targeting':
        return <JobTargeting />;
      case 'recruiter':
        return <RecruiterView />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome to ResumeAI Pro</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </AuthProvider>
  );
}

export default App;