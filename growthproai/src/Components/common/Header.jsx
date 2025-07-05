import React from 'react';
import { Building2 } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Building2 className="w-10 h-10 text-blue-600" />
        <h1 className="md:text-3xl text-xl font-bold text-gray-800">
          Local Business Dashboard
        </h1>
      </div>
      <p className="text-gray-600 md:text-lg text-md">
        Get insights into your business's online presence
      </p>
    </div>
  );
};

export default Header;