import { FC, ReactNode } from 'react';
import MainComponent from './MainComponent';
import ContentComponent from './ContentComponent';
import HeaderComponent from './HeaderComponent';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    // <SideBar />
    <MainComponent>
      <HeaderComponent />
      <ContentComponent>{children}</ContentComponent>
    </MainComponent>
  );
};

export default MainLayout;
