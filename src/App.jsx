import { AboutComponent, Feed, Toolbar } from './Home/Components';

function App() {
  return (
    <>
      <div className="flex">
        <Toolbar />
        <div className="flex-1 flex bg-black text-white">
          <Feed />
          <AboutComponent />
        </div>
      </div>
    </>
  );
}

export default App;
