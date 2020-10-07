/*
   Routes : 
    This contains the information of the componented to be routed. 
*/
import Home from '../Home';
import Settings from '../Settings';
import Locale from '../utlis/Locale';

const Routes = [
  {
    path: '/',
    sidebarName: Locale.print("Home"),
    component: Home
  },
  {
    path: '/Settings',
    sidebarName: Locale.print("Settings"),
    component: Settings
  }
];

export default Routes;