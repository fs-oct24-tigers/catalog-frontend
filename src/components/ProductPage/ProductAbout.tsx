import React from 'react';
import { Table, TableHeader } from '@/components/ui/table';

type ProductDescription = {
  description: { title: string; text: string[] }[];
};

export const ProductAbout: React.FC<ProductDescription> = ({ description }) => {
  return (
    <div className="flex flex-col lg:w-[559px] items-start ">
      <div className="text-[22px] font-extrabold text-textWhite pt-[9px]">
        About
      </div>
      <Table>
        <TableHeader>
          <tr>
            <td colSpan={2}>
              <div className="h-0.5 bg-lineGray mt-[23px] mb-[32px]" />
            </td>
          </tr>
        </TableHeader>
      </Table>

      {description.map((section, index) => (
        <div key={index}>
          <div className="text-xl font-bold text-textWhite mb-4">
            {section.title}
          </div>

          {section.text.map((text, index) => (
            <div
              key={index}
              className="text-sm font-semibold text-textGray mb-8"
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
