
import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="text-center p-4">
      <div className="font-pixel text-6xl mb-4">🎨</div>
      <h2 className="font-pixel text-2xl text-pixel-text mb-2">Ready to Create?</h2>
      <p className="text-pixel-secondary">
        Enter a prompt above and click "Generate" to create your own unique pixel art.
      </p>
    </div>
  );
};

export default WelcomeMessage;
