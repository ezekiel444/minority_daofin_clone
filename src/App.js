import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Add from './components/add/Add';
import Learn from './components/learn/Learn';
import Navbar from './components/navbar/Navbar';
import DetailPage from './components/detailpage/DetailPage';


function App() {

  return (
    <div className="App">
    <Navbar/>
    <div className="Dynamic_component">
    <Switch>
        <Route path="/learn" component={Learn} />
        <Route path="/add" component={Add} />
        <Route path="/detail/:id" component={DetailPage}   />
        <Route path="/" component={Home} />
       
      </Switch>
    </div>
      
    </div>
  );
}

export default App;
