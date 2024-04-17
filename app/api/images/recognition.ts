import axios from 'axios';

interface ImageRecognitionResponse {
    label: string;
}


export async function recognizeImage(file: string): Promise<ImageRecognitionResponse | null> {
    try {
        const apiEndpoint = 'https://image-recongnition-v2-2ginpapv2q-el.a.run.app/api';

        
        const payload = {
            file,
        };
        
        const response = await axios.post(apiEndpoint, payload);
        
        if (response.status === 200) {
            const result: ImageRecognitionResponse = response.data;
            return result;
        } else {
            console.error('Error:', response.status, response.data);
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
