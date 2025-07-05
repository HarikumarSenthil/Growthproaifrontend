import React from 'react';
import { MapPin, RefreshCw } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

const SEOHeadlineCard = ({ 
  headline, 
  onRegenerate, 
  isRegenerating 
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-purple-600" />
          AI-Generated SEO Headline
        </h3>
        <button
          onClick={onRegenerate}
          disabled={isRegenerating}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
        >
          {isRegenerating ? (
            <LoadingSpinner text="Generating..." />
          ) : (
            <>
              <RefreshCw className="w-4 h-4" />
              Regenerate
            </>
          )}
        </button>
      </div>
      
      <div className="bg-white rounded-lg p-4 border border-purple-100">
        <p className="text-gray-800 text-lg font-medium leading-relaxed">
          "{headline}"
        </p>
      </div>
    </div>
  );
};

export default SEOHeadlineCard;