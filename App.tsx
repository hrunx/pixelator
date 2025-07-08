
import React, { useState, useCallback } from 'react';
import { generatePixelArt } from './services/geminiService';
import PromptInput from './components/PromptInput';
import PixelArtDisplay from './components/PixelArtDisplay';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [prompt, setPrompt] = useState<string>('A knight fighting a dragon on a castle bridge');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generatePixelArt(prompt);
      setGeneratedImage(imageUrl);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-start text-pixel-text">
      <header className="text-center mb-8 w-full">
        <h1 className="font-pixel text-4xl md:text-5xl text-pixel-accent drop-shadow-[2px_2px_0px_rgba(0,0,0,0.7)]">
          Pixel Art Generator
        </h1>
        <p className="mt-4 text-pixel-secondary">
          Craft retro video game art with the power of AI
        </p>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center gap-8">
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleGenerate}
          isLoading={isLoading}
        />

        <div className="w-full min-h-[400px] bg-pixel-primary/30 border-4 border-dashed border-pixel-primary flex items-center justify-center p-4">
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {generatedImage && <PixelArtDisplay src={generatedImage} alt={prompt} />}
          {!isLoading && !error && !generatedImage && <WelcomeMessage />}
        </div>
      </main>
      <footer className="mt-auto pt-8 text-center text-pixel-secondary/70">
        <p>Powered by Google Imagen 3</p>
      </footer>
    </div>
  );
}

export default App;
