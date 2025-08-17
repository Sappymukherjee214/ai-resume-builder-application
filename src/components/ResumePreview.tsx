import React from 'react';
import { Eye, Download, Printer } from 'lucide-react';

interface ResumePreviewProps {
  resume: any;
}

export function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Preview</h3>
        <div className="flex items-center space-x-2">
          <button className="text-gray-600 hover:text-gray-800">
            <Eye size={16} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Download size={16} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Printer size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-6 bg-white" style={{ minHeight: '800px' }}>
        {/* Resume Content */}
        <div className="space-y-6">
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com | (555) 123-4567</p>
            <p className="text-gray-600">LinkedIn: /in/johndoe | GitHub: @johndoe</p>
          </div>

          {resume.sections.map((section: any) => (
            <div key={section.id} className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                {section.type}
              </h2>
              
              {section.type === 'summary' && (
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              )}
              
              {section.type === 'experience' && Array.isArray(section.content) && (
                <div className="space-y-4">
                  {section.content.map((exp: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                          <p className="text-gray-700">{exp.company}</p>
                        </div>
                        <p className="text-gray-600 text-sm">{exp.duration}</p>
                      </div>
                      <p className="text-gray-700 mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}