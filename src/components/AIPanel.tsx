import React, { useState } from 'react';
import { Wand2, Lightbulb, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';

interface AIPanelProps {
  section?: any;
}

export function AIPanel({ section }: AIPanelProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  if (!section) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
        <Wand2 className="mx-auto text-gray-400 mb-2" size={32} />
        <p className="text-gray-500">Select a section to see AI suggestions</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">AI Assistant</h3>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-1 disabled:opacity-50"
          >
            <RefreshCw size={14} className={isAnalyzing ? 'animate-spin' : ''} />
            <span>{isAnalyzing ? 'Analyzing...' : 'Analyze'}</span>
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {/* ATS Score */}
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-blue-800">ATS Score</span>
            <span className="text-2xl font-bold text-blue-600">{section.atsScore}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${section.atsScore}%` }}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <Lightbulb size={16} className="mr-1 text-yellow-500" />
            Suggestions
          </h4>
          <div className="space-y-2">
            {section.suggestions?.map((suggestion: string, index: number) => (
              <div key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-lg">
                <AlertTriangle size={16} className="text-yellow-500 mt-0.5" />
                <p className="text-sm text-yellow-800">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Recommended Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((keyword) => (
              <button
                key={keyword}
                className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full text-left p-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              ✨ Enhance with AI
            </button>
            <button className="w-full text-left p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              🎯 Optimize for ATS
            </button>
            <button className="w-full text-left p-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              📈 Add Metrics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}