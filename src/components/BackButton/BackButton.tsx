import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-x-1 text-textSecondaryGray hover:text-textWhite transition-colors"
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="text-sm font-semibold">Back</span>
    </button>
  );
};
