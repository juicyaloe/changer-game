import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface MobileType {
  children: ReactNode;
}

export default function Mobile({ children }: MobileType) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  return <>{isMobile && children}</>;
}
