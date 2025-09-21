import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  className?: string;
}

export default function CardGrid({ children, className = '' }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {children}
    </div>
  );
}