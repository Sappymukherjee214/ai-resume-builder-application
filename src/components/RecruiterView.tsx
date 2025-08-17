import React, { useState } from 'react';
import { Eye, Clock, Award, AlertCircle, CheckCircle } from 'lucide-react';

export function RecruiterView() {
  const [viewMode, setViewMode] = useState<'ats' | 'human'>('human');

  const atsData = {
    score: 82,
    passedScreening: true,
    keywordsFound: 15,
    keywordsMissed: 3,
    readingTime: '45 seconds',
    compatibilityIssues: [
      'Complex formatting may not parse correctly',
      'Some bullet points too long for ATS scanning'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Recruiter View Simulation</h2>
          <p className="text-gray-600 mt-1">See how your resume appears to recruiters and ATS systems</p>
        </div>
        
        <div className="flex items-center bg-white rounded-lg border border-gray-300 p-1">
          <button
            onClick={() => setViewMode('human')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'human' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Eye className="inline mr-2" size={16} />
            Human View
          </button>
          <button
            onClick={() => setViewMode('ats')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'ats' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ATS View
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">ATS Score</p>
              <p className="text-2xl font-bold text-green-600">{atsData.score}%</p>
            </div>
            <Award className="text-green-600" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reading Time</p>
              <p className="text-2xl font-bold text-blue-600">{atsData.readingTime}</p>
            </div>
            <Clock className="text-blue-600" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Keywords Found</p>
              <p className="text-2xl font-bold text-green-600">{atsData.keywordsFound}</p>
            </div>
            <CheckCircle className="text-green-600" size={24} />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Issues Found</p>
              <p className="text-2xl font-bold text-orange-600">{atsData.compatibilityIssues.length}</p>
            </div>
            <AlertCircle className="text-orange-600" size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resume View */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">
                {viewMode === 'human' ? 'Human Recruiter View' : 'ATS System View'}
              </h3>
            </div>
            
            <div className="p-6">
              {viewMode === 'human' ? (
                <div className="space-y-6">
                  {/* Human-friendly view with proper formatting */}
                  <div className="text-center border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                    <p className="text-gray-600">Software Engineer</p>
                    <p className="text-gray-600">john.doe@example.com | (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">PROFESSIONAL SUMMARY</h2>
                    <p className="text-gray-700">
                      Experienced software engineer with 5+ years in full-stack development, 
                      specializing in React and Node.js applications.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">EXPERIENCE</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900">Senior Software Engineer</h3>
                            <p className="text-gray-700">Tech Corp</p>
                          </div>
                          <p className="text-gray-600">2021 - Present</p>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                          <li>Led development of web applications using React and Node.js</li>
                          <li>Improved application performance by 40% through optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 font-mono text-sm">
                  {/* ATS parsed view - plain text */}
                  <div className="bg-gray-50 p-4 rounded">
                    <p>NAME: John Doe</p>
                    <p>EMAIL: john.doe@example.com</p>
                    <p>PHONE: (555) 123-4567</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>SUMMARY:</strong></p>
                    <p>Experienced software engineer with 5+ years in full-stack development specializing in React and Node.js applications</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p><strong>EXPERIENCE:</strong></p>
                    <p>Senior Software Engineer Tech Corp 2021 Present</p>
                    <p>Led development of web applications using React and Node.js</p>
                    <p>Improved application performance by 40% through optimization</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="text-red-800"><strong>PARSING ISSUES:</strong></p>
                    <p className="text-red-700">- Complex bullet formatting not recognized</p>
                    <p className="text-red-700">- Date range formatting may be unclear</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">ATS Compatibility</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Overall Score</span>
                <span className="font-bold text-green-600">{atsData.score}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${atsData.score}%` }}
                />
              </div>
              
              <div className="flex items-center space-x-2 mt-4">
                <CheckCircle className="text-green-600" size={16} />
                <span className="text-sm text-green-700">Passed initial ATS screening</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Keyword Analysis</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Keywords Found</span>
                <span className="font-bold text-green-600">{atsData.keywordsFound}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Keywords Missed</span>
                <span className="font-bold text-orange-600">{atsData.keywordsMissed}</span>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Missing Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Docker', 'Kubernetes'].map((keyword) => (
                    <span key={keyword} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Issues & Recommendations</h3>
            
            <div className="space-y-3">
              {atsData.compatibilityIssues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-2 p-2 bg-orange-50 rounded-lg">
                  <AlertCircle size={16} className="text-orange-500 mt-0.5" />
                  <p className="text-sm text-orange-800">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}