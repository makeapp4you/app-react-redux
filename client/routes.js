import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Contact from './components/Contact';
import SignUpPage from './components/signup/SignUpPage';

export default ( 
    <Route path="/" component={App}>
        <IndexRoute component={Contact} />
        <Route path="signup" component={SignUpPage} />
    </Route>
)
