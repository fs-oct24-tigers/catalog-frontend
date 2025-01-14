import React from 'react';

interface TitleProps {
  className?: string;
  mainText?: string;
  additionalText?: string;
  isAdditionalTextBlock?: boolean;
  prefix?: string;
  category?: string;
}

export const HeaderTitle: React.FC<TitleProps> = ({
  className,
  mainText,
  additionalText,
  isAdditionalTextBlock = false,
  prefix,
  category,
}) => {
  const renderMainText = () => {
    if (category) {
      return prefix ?
          `${prefix} ${category.charAt(0).toUpperCase() + category.slice(1)}`
        : category.charAt(0).toUpperCase() + category.slice(1);
    }
    return mainText;
  };

  return (
    <h1
      className={`text-[22px] sm:text-[32px] font-extrabold text-textWhite mb-6 mt-6 ${className}`}
    >
      {renderMainText()}{' '}
      {additionalText && (
        <span className={isAdditionalTextBlock ? 'block sm:inline' : 'inline'}>
          {additionalText}
        </span>
      )}
    </h1>
  );
};
