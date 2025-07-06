import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SpotlightCard from '../../../reactbits/SpotlightCard/SpotlightCard';
import { Sprout } from 'lucide-react';
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
       <SpotlightCard>
      <div className="max-w-4xl mx-auto">
        <Header />
       
        <main>
          {children}
        </main>
        
        <Footer />
      </div>
      </SpotlightCard>
    </div>
  );
};

export default DashboardLayout;