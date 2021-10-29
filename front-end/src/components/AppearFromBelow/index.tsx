import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  timeInMs?: number;
};

function AppearFromBelow({ children, timeInMs = 500 }: Props) {
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'translateY(100px)',
    opacity: 0,
  });

  useEffect(() => {
    setTimeout(() =>
      setStyle({
        transform: 'translateY(0)',
        opacity: 1,
      }),
    );
  }, [setStyle]);

  return (
    <Wrapper style={style} timeInMs={timeInMs}>
      <>{children}</>
    </Wrapper>
  );
}

export default AppearFromBelow;
