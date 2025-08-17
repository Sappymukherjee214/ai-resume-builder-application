import React from 'react';
import { TrendingUp, Users, Target, Award, Calendar } from 'lucide-react';

export function Analytics() {
  const analyticsData = {
    atsScore: 82,
    keywordDensity: 75,
    readabilityScore: 90,
    formattingScore: 95,
    profileViews: 156,
    applicationSuccess: 23
  };

  const chartData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 72 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 82 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 82 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Last 30 days</span>
        </div>
      </div>

      {/* Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall ATS Score</p>
              <p className="text-3xl font-bold text-green-600 mt-1">{analyticsData.atsScore}%</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Award size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: `${analyticsData.atsScore}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Keyword Optimization</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{analyticsData.keywordDensity}%</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Target size={24} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${analyticsData.keywordDensity}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Profile Views</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{analyticsData.profileViews}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Users size={24} className="text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp size={14} className="text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+12%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Application Success</p>
              <p className="text-3xl font-bold text-orange-600 mt-1">{analyticsData.applicationSuccess}%</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <TrendingUp size={24} className="text-orange-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp size={14} className="text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+5%</span>
          </div>
        </div>
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ATS Score Trend</h3>
          <div className="space-y-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 w-8">{item.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-10 text-right">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Section Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium text-green-800">Summary</span>
              <span className="text-green-600 font-bold">95%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-blue-800">Experience</span>
              <span className="text-blue-600 font-bold">88%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium text-yellow-800">Skills</span>
              <span className="text-yellow-600 font-bold">72%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-medium text-purple-800">Education</span>
              <span className="text-purple-600 font-bold">91%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
            <p className="font-medium text-red-800">Critical</p>
            <p className="text-sm text-red-700 mt-1">Add more technical skills relevant to your target role</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="font-medium text-yellow-800">Moderate</p>
            <p className="text-sm text-yellow-700 mt-1">Include quantified achievements in experience section</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Suggestion</p>
            <p className="text-sm text-blue-700 mt-1">Consider adding a projects section to showcase work</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-green-800">Good</p>
            <p className="text-sm text-green-700 mt-1">Your formatting and structure are ATS-friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
}