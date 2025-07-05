import React from 'react';
import RatingCard from './RatingCard';
import ReviewsCard from './ReviewsCard';
import SEOHeadlineCard from './SEOHeadlineCard';

const BusinessCard = ({ 
  businessData, 
  businessName, 
  onRegenerateHeadline, 
  isRegenerating 
}) => {
  if (!businessData) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Business Insights for {businessName}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <RatingCard rating={businessData.rating} />
        <ReviewsCard reviews={businessData.reviews} />
      </div>

      <SEOHeadlineCard 
        headline={businessData.headline}
        onRegenerate={onRegenerateHeadline}
        isRegenerating={isRegenerating}
      />
    </div>
  );
};

export default BusinessCard;