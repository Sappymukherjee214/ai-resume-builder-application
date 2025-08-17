import React, { useState } from 'react';
import { Search, Target, Wand2, Download, RefreshCw } from 'lucide-react';

export function JobTargeting() {
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [isGenerating, setIsGenerating] = useState(false);

  const jobRoles = [
    { title: 'Software Engineer', match: 92, keywords: ['JavaScript', 'React', 'Node.js'] },
    { title: 'Frontend Developer', match: 88, keywords: ['React', 'Vue.js', 'CSS'] },
    { title: 'Full Stack Developer', match: 85, keywords: ['JavaScript', 'Python', 'SQL'] },
    { title: 'DevOps Engineer', match: 67, keywords: ['Docker', 'AWS', 'Kubernetes'] },
    { title: 'Product Manager', match: 45, keywords: ['Strategy', 'Analytics', 'Leadership'] }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Job Targeting</h2>
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <Wand2 size={16} className={isGenerating ? 'animate-spin' : ''} />
          <span>{isGenerating ? 'Generating...' : 'Generate Tailored Resume'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Search */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Job Roles</h3>
            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search job titles..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-2">
              {jobRoles.map((role) => (
                <button
                  key={role.title}
                  onClick={() => setSelectedRole(role.title)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedRole === role.title
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{role.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      role.match >= 80 ? 'bg-green-100 text-green-700' :
                      role.match >= 60 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {role.match}% match
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {role.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Role Analysis */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{selectedRole} Analysis</h3>
              <div className="flex items-center space-x-2">
                <Target className="text-blue-600" size={20} />
                <span className="text-2xl font-bold text-blue-600">
                  {jobRoles.find(r => r.title === selectedRole)?.match}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Missing Keywords</h4>
                <div className="space-y-2">
                  {['TypeScript', 'GraphQL', 'MongoDB', 'Redis', 'Microservices'].map((keyword) => (
                    <div key={keyword} className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                      <span className="text-red-800 font-medium">{keyword}</span>
                      <button className="text-red-600 hover:text-red-800 text-sm">Add</button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Matching Skills</h4>
                <div className="space-y-2">
                  {['JavaScript', 'React', 'Node.js', 'AWS', 'Git'].map((skill) => (
                    <div key={skill} className="flex items-center p-2 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-800 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Suggestions</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-blue-800">Summary Enhancement</p>
                <p className="text-sm text-blue-700 mt-1">
                  Add "full-stack development" and "scalable applications" to better match this role
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <p className="font-medium text-purple-800">Experience Optimization</p>
                <p className="text-sm text-purple-700 mt-1">
                  Emphasize your experience with React and Node.js in your job descriptions
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <p className="font-medium text-orange-800">Skills Section</p>
                <p className="text-sm text-orange-700 mt-1">
                  Consider adding TypeScript and GraphQL to your technical skills
                </p>
              </div>
            </div>
          </div>

          {/* Generated Resume Preview */}
          {isGenerating && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <RefreshCw size={16} className="animate-spin text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Generating Tailored Resume...</h3>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}