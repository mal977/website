import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Theme from './styles/theme'

function App() {
  return (
    <Theme>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Route path="/" exact component={Home} />
      </Router>
    </Theme>
  );
}

export default App;
