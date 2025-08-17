import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  Target, 
  Award,
  Plus,
  Clock,
  Eye,
  Download
} from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';

export function Dashboard() {
  const { currentResume, resumes } = useResume();

  const stats = [
    {
      label: 'ATS Score',
      value: currentResume?.atsScore || 0,
      change: '+5',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Resumes',
      value: resumes.length,
      change: '+2',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Job Matches',
      value: 12,
      change: '+8',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Profile Views',
      value: 48,
      change: '+15',
      icon: Eye,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus size={16} />
          <span>New Resume</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon size={24} className={stat.color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Resumes</h3>
          <div className="space-y-4">
            {resumes.map((resume) => (
              <div key={resume.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">{resume.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock size={14} className="text-gray-400" />
                      <p className="text-sm text-gray-500">
                        Modified {resume.lastModified.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {resume.atsScore}% ATS
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Suggestions</h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm font-medium text-blue-800">Keyword Optimization</p>
              <p className="text-sm text-blue-700 mt-1">Add "React" and "TypeScript" to your skills section</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-sm font-medium text-orange-800">Content Enhancement</p>
              <p className="text-sm text-orange-700 mt-1">Include quantified achievements in your experience</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="text-sm font-medium text-green-800">ATS Improvement</p>
              <p className="text-sm text-green-700 mt-1">Your resume structure is ATS-friendly!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}