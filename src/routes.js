import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Containers
import App from './containers/App';
import PostDetails from './containers/PostDetails';
import Users from './containers/Users';

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/users" component={Users} />
                <Route path="/post/:id" component={PostDetails} />
            </Switch>
        
        </Router>
    )
}


export default Routes;