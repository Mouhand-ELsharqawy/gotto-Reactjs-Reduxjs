import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import JobList from './component/JobList';
import JobDetail from './component/JobDetail';
import Contact from './component/Contact';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>

        <Route exact path= "/" >
            <Home title={"Home"} />
        </Route>
        <Route path="/about">
            <About title={"About Us"} />
        </Route>
        <Route exact path="/joblist">
          <JobList title={"Job List"} />
        </Route>
        <Route exact path="/jobdetail">
            <JobDetail title={"Job Details"}/>
        </Route>
        <Route exact path="/contact">
            <Contact title={"Contact"} />
        </Route>
        <Route path="*">
            <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
