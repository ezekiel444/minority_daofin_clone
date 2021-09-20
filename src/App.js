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
import SearchBar from './components/search/SearchBar';
import {useQuery} from "@apollo/client";
import getDaofindData from './components/apollo_files/QueryData';


function App() {
  const {loading, error,data} = useQuery(getDaofindData)

if(loading) return <div>loading</div>
if(error) return <div>error</div>



  return (
    <div className="App"> 
    <div className="searchBar">
     <SearchBar data={data} />
    </div>
    <Navbar/> 
    <div className="Dynamic_component">
    <Switch>
        <Route path="/learn" component={Learn} />
        <Route path="/add" component={Add} />
        <Route path="/detail/:id" component={DetailPage}   />
        <Route path="/">
          <Home data={data} error={error} loading={loading} />
        </Route>
       
      </Switch>
    </div>
      
    </div>
  );
}

export default App;
