import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { BlogsList, BlogsInsert, BlogsUpdate, Header } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/blogs/list" exact component={BlogsList} />
                <Route path="/blogs/create" exact component={BlogsInsert} />
                <Route
                    path="/blogs/update/:id"
                    exact
                    component={BlogsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
