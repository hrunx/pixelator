
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-4 items-center">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., a magical forest with glowing mushrooms"
        rows={2}
        className="font-mono w-full flex-grow bg-pixel-primary/50 border-2 border-pixel-border p-3 text-pixel-text placeholder:text-pixel-secondary focus:outline-none focus:ring-2 focus:ring-pixel-accent shadow-pixel-inset resize-none"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="font-pixel w-full md:w-auto text-lg bg-pixel-accent text-pixel-bg px-6 py-4 border-2 border-black shadow-pixel-hard hover:shadow-pixel-hard-hover transform hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-150 ease-in-out disabled:bg-pixel-secondary disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
    </form>
  );
};

export default PromptInput;
