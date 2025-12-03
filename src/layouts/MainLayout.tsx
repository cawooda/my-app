import { Outlet } from 'react-router';
import Menu from '../components/Menu';
import menuItems from '../appConfig/menuItems';

function MainLayout() {
  return (
    <div>
      <Menu items={menuItems} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
