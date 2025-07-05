import React from 'react';
import { Star } from 'lucide-react';

const RatingCard = ({ rating }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
      <div className="flex items-center gap-3 mb-2">
        <Star className="w-6 h-6 text-yellow-500 fill-current" />
        <h3 className="text-lg font-semibold text-gray-800">Google Rating</h3>
      </div>
      <div className="text-3xl font-bold text-yellow-600">
        {rating}
      </div>
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingCard;