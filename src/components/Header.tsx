import React from 'react';
import { Menu, Bell, User, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">ResumeAI Pro</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">Pro Plan</span>
          </div>
          
          <button className="text-gray-500 hover:text-gray-700 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="text-gray-500 hover:text-gray-700">
            <Settings size={20} />
          </button>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">{user?.name}</div>
              <div className="text-gray-500">{user?.email}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}