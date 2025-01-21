import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to="/"
              className="text-textGray hover:text-slate-950 dark:hover:text-textWhite"
            >
              <Home size={16} />
            </NavLink>
          </BreadcrumbItem>

          {category && (
            <>
              <BreadcrumbSeparator className="text-textGray" />
              <BreadcrumbItem>
                <NavLink
                  to={`/${category}`}
                  className="text-textGray hover:text-slate-950 dark:hover:text-textWhite"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavLink>
              </BreadcrumbItem>
            </>
          )}

          {productName && (
            <>
              <BreadcrumbSeparator className="text-textGray" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-950 dark:text-textWhite">
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
