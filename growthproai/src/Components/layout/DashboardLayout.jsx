import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;