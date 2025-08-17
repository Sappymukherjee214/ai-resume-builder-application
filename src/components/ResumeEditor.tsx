import React, { useState } from 'react';
import { Save, Download, Wand2, RefreshCw } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import { SectionEditor } from './SectionEditor';
import { AIPanel } from './AIPanel';
import { ResumePreview } from './ResumePreview';

export function ResumeEditor() {
  const { currentResume } = useResume();
  const [activeSection, setActiveSection] = useState<string>('summary');
  const [showAIPanel, setShowAIPanel] = useState(true);

  if (!currentResume) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No resume selected</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Resume Editor</h2>
          <p className="text-gray-600 mt-1">
            ATS Score: <span className="font-semibold text-green-600">{currentResume.atsScore}%</span>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowAIPanel(!showAIPanel)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <Wand2 size={16} />
            <span>AI Assistant</span>
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
            <RefreshCw size={16} />
            <span>Analyze</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Save size={16} />
            <span>Save</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Editor Panel */}
        <div className={`${showAIPanel ? 'col-span-4' : 'col-span-6'} space-y-4`}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Resume Sections</h3>
            </div>
            <div className="p-4">
              {currentResume.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium capitalize">{section.type}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      section.atsScore >= 80 ? 'bg-green-100 text-green-700' :
                      section.atsScore >= 60 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {section.atsScore}%
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <SectionEditor 
            section={currentResume.sections.find(s => s.id === activeSection)}
          />
        </div>

        {/* AI Panel */}
        {showAIPanel && (
          <div className="col-span-4">
            <AIPanel 
              section={currentResume.sections.find(s => s.id === activeSection)}
            />
          </div>
        )}

        {/* Preview Panel */}
        <div className={`${showAIPanel ? 'col-span-4' : 'col-span-6'}`}>
          <ResumePreview resume={currentResume} />
        </div>
      </div>
    </div>
  );
}