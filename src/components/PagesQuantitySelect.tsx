import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const options = [16, 32, 64, 128];

type Props = {
  perPage: number;
  handlePerPageChange: (value: number) => void;
};

const PagesQuantitySelect: React.FC<Props> = ({
  perPage,
  handlePerPageChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-small text-textGray">Items on page</span>
      <Select onValueChange={(value) => handlePerPageChange(Number(value))}>
        <SelectTrigger className="w-[128px]">
          <SelectValue placeholder={perPage} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={String(option)}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PagesQuantitySelect;
