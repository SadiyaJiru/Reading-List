import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/books";
import Nav from "../src/components/Nav/index";
import MoreInfo from "./pages/moreInfo";
import NoMatch from "./pages/NoMatch";

//Using Switch` component from the React Router Dom library
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={MoreInfo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;