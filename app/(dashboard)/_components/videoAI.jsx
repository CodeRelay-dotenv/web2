import React, { useState } from 'react';
import {MarkdownWrapper} from "@/app/board/[boardId]/_components/MarkdownWrapper"


function VideoAI() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch('https://newconfig-1088440979862.asia-south1.run.app/generate-notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          youtube_url: inputValue
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      setResponse(data.notes);
    } catch (err) {
      setError(err.message || 'Failed to submit data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Sending...' : 'Submit Data'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          Error: {error}
        </div>
      )}

      {response && (
        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <h3 className="text-lg font-semibold">API Response:</h3>
          
            <MarkdownWrapper source={response}/>
        </div>
      )}
    </div>
  );
}

export default VideoAI;