import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface PcType {
  children: ReactNode;
}

export default function Pc({ children }: PcType) {
  const isPc = useMediaQuery({
    query: '(min-width:769px)',
  });
  return <>{isPc && children}</>;
}
