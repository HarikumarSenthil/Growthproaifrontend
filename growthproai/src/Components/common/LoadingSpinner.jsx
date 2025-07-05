import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Loader2 className="w-5 h-5 animate-spin" />
      <span>{text}</span>
    </div>
  );
};

export default LoadingSpinner;