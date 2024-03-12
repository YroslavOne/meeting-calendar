import "./App.css";
import Main from "./appComponents/Main.js";
import LeftSidebar from "./appComponents/mainComponents/LeftSidebar.js";
import TopPanel from "./appComponents/mainComponents/TopPanel.js";
import { ContextProvider } from "./Context.js";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <LeftSidebar/>
        <div className="top-panel-and-main">
          <TopPanel/>
          <Main /></div>
        
      </div>
    </ContextProvider>
  );
}

export default App;
