import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';
import AboutUs from './components/pages/About';
import ListNews from './components/pages/ListNews';
import NewsArticle from './components/pages/NewsArticle';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
    <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route path="/news" component={ListNews}/>
              <Route path="/newsarticle/:url" render={props => <NewsArticle {...props} />}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
