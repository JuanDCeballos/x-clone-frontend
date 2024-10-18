import { Outlet } from 'react-router-dom';
import { AboutComponent, Toolbar } from './Home/Components';

function App() {
  return (
    <>
      <div className="flex">
        <Toolbar />
        <div className="flex-1 flex bg-black text-white">
          <Outlet />
        </div>
        <AboutComponent />
      </div>
    </>
  );
}

export default App;
