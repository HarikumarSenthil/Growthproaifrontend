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
        <h3 className="md:text-lg text-xs font-semibold text-gray-800 flex items-center gap-2">
          <MapPin className="w-8 h-8 text-purple-600" />
          AI-Generated SEO 
        </h3>
        <button
            onClick={onRegenerate}
            disabled={isRegenerating}
            className="bg-purple-600 hover:bg-purple-700 cursor-pointer disabled:bg-purple-400 text-white px-4 md:text-md py-2 rounded-lg transition-colors flex items-center gap-2 text-sm min-w-[140px] justify-center"
            >
            <span className={`${isRegenerating ? 'opacity-100' : 'opacity-0'} transition-opacity absolute`}>
                <LoadingSpinner text="Generating..." />
            </span>

            <span className={`${isRegenerating ? 'opacity-0' : 'opacity-100'} transition-opacity flex items-center gap-2`}>
                <RefreshCw className="w-4 h-4" />
                Regenerate
            </span>
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