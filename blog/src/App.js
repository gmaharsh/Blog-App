import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Compoents/Header/Header';
import Body from './Compoents/Body/Body';
import AddNewPost from './Compoents/Body/AddNewPost/AddNewPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/addnewPost">
            <AddNewPost />
          </Route>
          <Route path="/:roomId">
            <Body />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
