import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center justify-center gap-x-1 mb-4"
    >
      <ChevronLeft className="h-3 w-3" />
      <span className="text-slate-950 dark:text-textWhite text-small font-semibold -mb-[1px]">
        Back
      </span>
    </button>
  );
};
