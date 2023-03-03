import { ReactNode } from 'react';

export default function Optional({
  children,
  condition,
}: {
  children: ReactNode;
  condition: boolean;
}) {
  return <>{condition && children}</>;
}
