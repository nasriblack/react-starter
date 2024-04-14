import { FC, ReactNode } from 'react';

interface MainComponentProps {
  children: ReactNode;
}

const MainComponent: FC<MainComponentProps> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default MainComponent;
