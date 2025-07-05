import React, { useState } from 'react';
import DashboardLayout from './Components/layout/DashboardLayout';
import BusinessForm from './Components/forms/BusinessForm';
import BusinessCard from './Components/cards/BusinessCard';
import { useBusinessData } from './hooks/useBusinessData';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: ''
  });

  const {
    businessData,
    isLoading,
    isRegenerating,
    error,
    fetchData,
    regenerateHeadlineData
  } = useBusinessData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.name.trim() || !formData.location.trim()) {
    return;
  }

  await fetchData(formData);
};


  const handleRegenerateHeadline = async () => {
    await regenerateHeadlineData(formData);
  };

  return (
    <DashboardLayout>
      <BusinessForm 
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
      <BusinessCard 
        businessData={businessData}
        businessName={formData.name}
        onRegenerateHeadline={handleRegenerateHeadline}
        isRegenerating={isRegenerating}
      />
    </DashboardLayout>
  );
};

export default App;
