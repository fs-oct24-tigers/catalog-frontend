import React from 'react';

interface TitleProps {
  className?: string;
  mainText?: string;
  additionalText?: string;
  isAdditionalTextBlock?: boolean;
  prefix?: string;
  category?: string;
  isHomePage?: boolean;
}

export const HeaderTitle: React.FC<TitleProps> = ({
  className,
  mainText,
  additionalText,
  isAdditionalTextBlock = false,
  prefix,
  category,
  isHomePage,
}) => {
  const renderMainText = () => {
    if (category) {
      return prefix ?
          `${prefix} ${category}`
        : category.charAt(0).toUpperCase() + category.slice(1);
    }
    return mainText;
  };

  return (
    <div
      className={`
      flex flex-col
      ${isHomePage ? 'pt-6 md:pt-8 xl:pt-14' : ''}
    `}
    >
      <h1
        className={`text-h1Mobile sm:text-h1 font-extrabold text-textWhite mb-2 ${className}`}
      >
        {renderMainText()}{' '}
        {additionalText && (
          <span
            className={isAdditionalTextBlock ? 'block sm:inline' : 'inline'}
          >
            {additionalText}
          </span>
        )}
      </h1>
    </div>
  );
};
