import axios from 'axios';
import fs from 'fs/promises';

interface ImageGenerationResponse {
  image: Blob;
}

export async function generateImageWithAngles(object: string): Promise<string[] | null> {
  const angles = ['front', 'back', 'right', 'left'];
  const images: string[] = [];

  for (const angle of angles) {
    try {
      const data = { inputs: { object, angle } };
      const apiEndpoint = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1';
      const headers = {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json',
      };

      const response = await axios.post(apiEndpoint, data, {
        headers,
        responseType: 'blob',
      });

      if (response.status === 200) {
        const blobData = response.data;
        const fileName = `output_${angle}.jpg`;
        await fs.writeFile(fileName, blobData);
        images.push(fileName);
      } else {
        console.error('Error:', response.status, response.data);
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  }

  return images;
}
