
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generatePixelArt(prompt: string): Promise<string> {
  // Enhance the prompt to guide the model towards a specific pixel art style
  const enhancedPrompt = `A high-quality, detailed pixel art of ${prompt}. 16-bit retro video game style, vibrant colors, clear outlines.`;

  try {
    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: enhancedPrompt,
        config: {
            numberOfImages: 1, 
            outputMimeType: 'image/png'
        },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
        throw new Error("The model did not return any images.");
    }
    
    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    if (!base64ImageBytes) {
        throw new Error("Received an empty image from the API.");
    }
    
    return `data:image/png;base64,${base64ImageBytes}`;

  } catch (error) {
    console.error("Error generating pixel art:", error);
    // Provide a more user-friendly error message
    throw new Error('Failed to generate image. The model may have refused the request due to safety policies or an internal error.');
  }
}
