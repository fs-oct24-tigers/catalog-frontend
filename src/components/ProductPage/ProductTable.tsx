import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

interface ProductSpecs {
  specs: { name: string; value: string | undefined }[];
}

export const ProductTable: React.FC<ProductSpecs> = ({ specs }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[22px] font-extrabold text-textWhite">
            Tech specs
          </TableHead>
        </TableRow>
        <tr>
          <td colSpan={2}>
            <div className="h-0.5 bg-lineGray mt-4 mb-[25px]" />
          </td>
        </tr>
      </TableHeader>
      <TableBody>
        {specs.map((spec, index) => (
          <TableRow key={index}>
            <TableCell className="text-textGray text-sm font-semibold pt-2">
              {spec.name}
            </TableCell>
            <TableCell className="text-right text-textWhite pt-2">
              {spec.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
