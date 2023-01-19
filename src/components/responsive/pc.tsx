import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface PCType {
  children: ReactNode;
}

export default function PC({ children }: PCType) {
  const isPC = useMediaQuery({
    query: '(min-width:769px)',
  });
  return <>{isPC && children}</>;
}
