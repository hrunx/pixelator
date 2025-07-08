
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-8 bg-pixel-accent animate-pulse"></div>
            <div className="w-8 h-8 bg-pixel-border animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-8 h-8 bg-pixel-border animate-pulse [animation-delay:0.4s]"></div>
            <div className="w-8 h-8 bg-pixel-accent animate-pulse [animation-delay:0.6s]"></div>
        </div>
        <p className="font-pixel text-lg text-pixel-text">Creating Masterpiece...</p>
    </div>
  );
};

export default Loader;
