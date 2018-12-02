import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mainPage from "./pages/mainPage";
import MoreInfo from "./pages/moreInfo";
import NoMatch from "./pages/noMatch";
import Nav from "./components/nav";

//Using Switch` component from the React Router Dom library
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/books" component={mainPage} />
          <Route exact path="/books/:id" component={MoreInfo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;