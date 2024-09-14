import { Feed, Toolbar } from './Home/Components';

function App() {
  return (
    <>
      <div className="flex">
        <Toolbar />
        <div className="flex-1 bg-black text-white">
          <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
