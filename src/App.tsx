import { Suspense } from 'react';
import { Progress } from './components/Progress.tsx';
import { FormProvider } from './FormProvider.tsx';
import { Routes, Route } from 'react-router-dom';
import { Card } from './components/Card.tsx';
import { routes } from './routes.tsx';
import { Spinner } from './components/Spinner.tsx';

export const App = () => {
  return (
    <FormProvider>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <div className="flex justify-center mt-10">
                  <Card>{component}</Card>
                </div>
              }
            />
          ))}
        </Routes>

        <div className="mt-10">
          <Progress />
        </div>
      </Suspense>
    </FormProvider>
  );
};
