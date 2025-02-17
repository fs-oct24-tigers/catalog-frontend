import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { changeSorting } from '@/features/sorting';
import { useNavigate, useLocation } from 'react-router-dom';
import { SortType } from '@/types';

const options: { value: SortType; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'alphabetically', label: 'Name' },
  { value: 'cheapest', label: 'Cheapest' },
  { value: 'expensive', label: 'Expensive' },
];

const SortingSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.sorting);
  const navigate = useNavigate();
  const location = useLocation();

  const handleValueChange = (value: string) => {
    dispatch(changeSorting(value as SortType));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-small text-textGray">Sort by</span>
      <Select value={currentSort} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {options.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingSelect;
