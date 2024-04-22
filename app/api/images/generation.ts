import axios, { AxiosResponse } from 'axios';

// Interface for the response structure
interface GenerateImageResponse {
  imageUrls: string[];
}

// API request function with timeout
export async function requestGenerateImages(objectName: string): Promise<string[]> {
  try {
    const response: AxiosResponse<GenerateImageResponse> = await axios.post<GenerateImageResponse>(
      'https://img-gen-hf-2ginpapv2q-el.a.run.app/api/genimg',
      { objectName },
      { timeout: 60000 } // Timeout set to 60 seconds (adjust as needed)
    );

    if (!response.data.imageUrls) {
      throw new Error('Failed to fetch image URLs');
    }

    return response.data.imageUrls;
  } catch (error) {
    console.error('Error requesting image generation:', error);
    throw error;
  }
}
