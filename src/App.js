import { ShowWareHouse } from "./components/ShowWareHouse";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ShowWareHouse />
      </div>
    </Router>
  );
}

export default App;
