import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    {children}
  </div>
);
