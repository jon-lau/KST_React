import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter} from 'react-router-dom';
import { SCELDashboard } from './components/pagecomponents/DashboardComponents';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';
import AboutUs from './components/pages/About';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
    <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
