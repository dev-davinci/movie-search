import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Switch>
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default App;
