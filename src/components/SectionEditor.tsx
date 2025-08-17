import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';

interface SectionEditorProps {
  section?: any;
}

export function SectionEditor({ section }: SectionEditorProps) {
  const { updateSection } = useResume();
  const [content, setContent] = useState(section?.content || '');

  if (!section) return null;

  const handleSave = () => {
    updateSection(section.id, content);
  };

  const renderEditor = () => {
    switch (section.type) {
      case 'summary':
        return (
          <textarea
            value={typeof content === 'string' ? content : ''}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Write a compelling professional summary..."
          />
        );
      
      case 'experience':
        return (
          <div className="space-y-4">
            {Array.isArray(content) && content.map((exp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <input
                  type="text"
                  value={exp.position || ''}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[index] = { ...exp, position: e.target.value };
                    setContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={exp.company || ''}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[index] = { ...exp, company: e.target.value };
                    setContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="Company"
                />
                <input
                  type="text"
                  value={exp.duration || ''}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[index] = { ...exp, duration: e.target.value };
                    setContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="Duration (e.g., Jan 2021 - Present)"
                />
                <textarea
                  value={exp.description || ''}
                  onChange={(e) => {
                    const newContent = [...content];
                    newContent[index] = { ...exp, description: e.target.value };
                    setContent(newContent);
                  }}
                  className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
                  placeholder="Job description and achievements..."
                />
                <button className="mt-2 text-red-600 hover:text-red-800 flex items-center space-x-1">
                  <Trash2 size={16} />
                  <span>Remove</span>
                </button>
              </div>
            ))}
            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 flex items-center justify-center space-x-2">
              <Plus size={16} />
              <span>Add Experience</span>
            </button>
          </div>
        );
      
      default:
        return (
          <textarea
            value={typeof content === 'string' ? content : JSON.stringify(content, null, 2)}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
          />
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 capitalize">{section.type}</h3>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
        >
          <Save size={14} />
          <span>Save</span>
        </button>
      </div>
      <div className="p-4">
        {renderEditor()}
      </div>
    </div>
  );
}