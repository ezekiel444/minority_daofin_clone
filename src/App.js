import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Add from './components/add/Add';
import Learn from './components/learn/Learn';
import Navbar from './components/navbar/Navbar';




function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/learn" component={Learn} />
      </Switch>
    </div>
  );
}

export default App;
