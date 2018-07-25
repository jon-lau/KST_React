import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './slideshow.css';
import './slide.js';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';
import AboutUs from './components/pages/About';
import Customers from './components/pages/Customers';
import ContactUs from './components/pages/ContactUs';
import ContractList from './components/pages/ContractList';
import ContractInfo from './components/pages/ContractInfo';
import ListNews from './components/pages/ListNews';
import NewsArticle from './components/pages/NewsArticle';
import Careers from  './components/pages/Careers';
import Testimonials from './components/pages/Testimonials';
import Services from './components/pages/Services';
import ListJobs from './components/pages/ListJobs';
import JobPost from './components/pages/JobPost';

import { HashLink as Link } from 'react-router-hash-link';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
    <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route path="/news" component={ListNews}/>
              <Route path="/services" component={Services}/>
              <Route path="/testimonials" component={Testimonials}/>
              <Route path="/jobs" component={ListJobs}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/contactUs" component={ContactUs}/>
              <Route path="/careers" component={Careers}/>
              <Route path="/contractList" component={ContractList}/>
              <Route path="/contractInfo" component={ContractInfo}/>
              <Route path="/newsarticle/:url" render={props => <NewsArticle {...props} />}/>
              <Route path="/jobpost/:url" render={props => <JobPost {...props} />}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
