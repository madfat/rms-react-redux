import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Main from './components/common/Main';
import Address from './components/Address/Address';
import Dependent from './components/Dependents/Dependents';
import EmploymentHistory from './components/EmploymentHistory/EmploymentHistory';
import EmployeeDetail from './components/EmployeeDetail/EmployeeDetail';
import GradeHistory from './components/GradeHistory/GradeHistory';
import Location from './components/Location/Location';
import DetailTabs from './components/common/DetailTabs';


export default (
    <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route component={Main} >
            <Route component={DetailTabs}>
                <IndexRoute component={EmployeeDetail} />
                <Route path="/detail" component={EmployeeDetail} />
                <Route path="/address" component={Address} />
                <Route path="/grade" component={GradeHistory} />
                <Route path="/location" component={Location} />
                <Route path="/employment" component={EmploymentHistory} />
                <Route path="/dependent" component={Dependent} />
            </Route>
        </Route>
    </Route>
    </Router>
);