import logo from "./logo.svg";
import "./App.css";
import Facts from "./Facts";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" width="200px" />
      <Facts />
    </div>
  );
}

export default App;
