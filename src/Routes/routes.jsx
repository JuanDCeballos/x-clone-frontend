import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  PageNotFoundComponent,
  UnderConstructionComponent,
} from '../Common/Components';
import { UserProfile, UserRegister } from '../Users/Components/index';
import { Feed } from '../Home/Components';
import { LogInComponent, LogOutComponent } from '../LogIn/Components/index';
// import ProtectedRoute from './ProtectedRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    // element: (
    //   <ProtectedRoute>
    //     <App />
    //   </ProtectedRoute>
    // ),
    element: <App />,
    errorElement: <PageNotFoundComponent />,
    // Verifiar si estas rutas al ser hijas de una ruta protected "Heredan ese comportamienot" o tambien se les debe poner la ruta protected
    children: [
      { path: 'profile', element: <UserProfile /> },
      { path: 'feed', element: <Feed /> },
      { path: 'underConstruction', element: <UnderConstructionComponent /> },
    ],
  },
  {
    path: 'login',
    element: <LogInComponent />,
  },
  {
    path: 'logout',
    element: <LogOutComponent />,
  },
  {
    path: 'register',
    element: <UserRegister />,
  },
]);

export default routes;
