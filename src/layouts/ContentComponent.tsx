import { FC, ReactNode } from 'react';

interface ContentComponentProps {
  children: ReactNode;
}

const ContentComponent: FC<ContentComponentProps> = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ContentComponent;
