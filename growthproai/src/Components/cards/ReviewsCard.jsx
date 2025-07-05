import React from 'react';
import { MessageSquare } from 'lucide-react';

const ReviewsCard = ({ reviews }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
      <div className="flex items-center gap-3 mb-2">
        <MessageSquare className="w-6 h-6 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">Total Reviews</h3>
      </div>
      <div className="text-3xl font-bold text-blue-600">
        {reviews}
      </div>
      <div className="text-sm text-gray-600 mt-2">
        Customer reviews
      </div>
    </div>
  );
};

export default ReviewsCard;