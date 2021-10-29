import { ReactNode, Suspense } from 'react';

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

function SuspenseWrapper({ fallback, children }: Props) {
  if (typeof window === 'undefined') {
    return <>{fallback}</>;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default SuspenseWrapper;
