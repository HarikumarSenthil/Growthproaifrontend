import { API_BASE_URL } from '../utils/constants';

export const fetchBusinessData = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/business-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      location: formData.location
    })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch business data');
  }

  return response.json();
};

export const regenerateHeadline = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(formData.name)}&location=${encodeURIComponent(formData.location)}`);
  
  if (!response.ok) {
    throw new Error('Failed to regenerate headline');
  }

  return response.json();
}