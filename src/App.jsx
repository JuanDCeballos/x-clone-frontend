import { Outlet } from 'react-router-dom';
import { AboutComponent, Toolbar } from './Home/Components';

function App() {
  return (
    <>
      <div className="flex bg-black text-white">
        <Toolbar />
        <Outlet />
        <AboutComponent />
      </div>
    </>
  );
}

export default App;
