import React from 'react';

const DarkSemiRoundedButton = ({ 
  label = "Button", // Default text label
  onClick, // Action when button is clicked
  disabled = false, // Disabled state
  className = "" // Additional class names for custom styling
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 ${className}`}
    >
      {label}
    </button>
  );
};

export default DarkSemiRoundedButton;