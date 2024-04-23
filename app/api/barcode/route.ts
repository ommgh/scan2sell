import axios, { AxiosResponse } from 'axios';

interface ImageData {
  data: any; // Update this type to match the structure of your response data
}

export const getImageFromDjango = async (imageUrl: string): Promise<ImageData> => {
  try {
    const response: AxiosResponse<ImageData> = await axios.post<ImageData>('http://127.0.0.1:8000/', {
      image: imageUrl
    });
    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching image data:', error);
    throw error;
  }
};
