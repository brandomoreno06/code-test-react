import './App.css';
import Launches from './components/Launches/Launches';
import { LaunchProvider } from './api/LaunchState';
import reducer, { initialState } from './api/reducer'

function App() {
  return (
    <div className="app">
      <LaunchProvider initialState={initialState} reducer={reducer} >
        <Launches />
      </LaunchProvider>
    </div>
  );
}

export default App;
