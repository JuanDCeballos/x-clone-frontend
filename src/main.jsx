import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes.jsx';
import { LogInProvider } from './LogIn/Context';
import { PostsProvider } from './Posts/Context/index.js';

createRoot(document.getElementById('root')).render(
  <LogInProvider>
    <PostsProvider>
      <RouterProvider router={routes} />
    </PostsProvider>
  </LogInProvider>
);
