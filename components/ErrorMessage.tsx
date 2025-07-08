
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="w-full p-4 border-2 border-red-500 bg-red-900/50 text-red-200 text-center">
      <p className="font-bold font-pixel text-lg">Error</p>
      <p className="mt-2 font-mono">{message}</p>
    </div>
  );
};

export default ErrorMessage;
