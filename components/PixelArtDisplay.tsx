
import React from 'react';

interface PixelArtDisplayProps {
  src: string;
  alt: string;
}

const PixelArtDisplay: React.FC<PixelArtDisplayProps> = ({ src, alt }) => {
  return (
    <div className="bg-black p-4 border-4 border-pixel-border shadow-pixel-hard">
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain image-rendering-pixelated"
        />
    </div>
  );
};

export default PixelArtDisplay;
