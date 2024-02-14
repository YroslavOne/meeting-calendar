import './App.css';
import Main from './appComponents/Main.js';
import { ContextProvider } from './Context.js';

function App() {
  return (
    <ContextProvider>
    <div className="App">
      <Main/>
    </div>
    </ContextProvider>
  );
}

export default App;
