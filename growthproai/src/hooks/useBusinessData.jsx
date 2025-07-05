import { useState } from 'react';
import { fetchBusinessData, regenerateHeadline } from '../services/api';

export const useBusinessData = () => {
  const [businessData, setBusinessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (formData) => {
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchBusinessData(formData);
      setBusinessData(data);
    } catch (err) {
      setError('Failed to fetch business data. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateHeadlineData = async (formData) => {
    if (!businessData) return;

    setIsRegenerating(true);
    setError('');

    try {
      const data = await regenerateHeadline(formData);
      setBusinessData(prev => ({
        ...prev,
        headline: data.headline
      }));
    } catch (err) {
      setError('Failed to regenerate headline. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsRegenerating(false);
    }
  };

  return {
    businessData,
    isLoading,
    isRegenerating,
    error,
    fetchData,
    regenerateHeadlineData
  };
};