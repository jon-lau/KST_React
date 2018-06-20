import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { SCELDashboard } from './components/pagecomponents/DashboardComponents';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={SCELDashboard} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
