import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbsProps {
  category?: string;
  productName?: string;
}

export const Breadcrumbs = ({ category, productName }: BreadcrumbsProps) => {
  return (
    <div className="mt-6 mb-6 xl:mb-10">
      <Breadcrumb>
        <BreadcrumbList className="text-small">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-textGray hover:text-textWhite"
            >
              <Home size={16} />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {category && (
            <>
              <BreadcrumbSeparator className="text-textGray" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${category}`}
                  className="text-textGray hover:text-textWhite"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}

          {productName && (
            <>
              <BreadcrumbSeparator className="text-textGray" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-textWhite">
                  {productName}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
