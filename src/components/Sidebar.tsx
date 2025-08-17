import React from 'react';
import { 
  LayoutDashboard, 
  Edit, 
  BarChart3, 
  Target, 
  Eye,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'editor', label: 'Resume Editor', icon: Edit },
  { id: 'targeting', label: 'Job Targeting', icon: Target },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'recruiter', label: 'Recruiter View', icon: Eye },
];

export function Sidebar({ currentView, onViewChange, isOpen, onToggle }: SidebarProps) {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-10 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <FileText className="text-blue-600" size={24} />
              <span className="font-bold text-gray-900">ResumeAI</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
              currentView === item.id
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon size={20} />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}