import './App.css';
import CardList from "./CardList"
import { robots } from "./robots"

function App() {
  return (
      <CardList robots={robots} />
  );
}

export default App;
