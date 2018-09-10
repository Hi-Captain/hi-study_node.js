import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main, CoursePage, CourseNew, CourseEdit, CourseCell, NotFound } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </nav>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path="/courses" exact component={CoursePage} />
            <Route path="/courses/new" component={CourseNew} />
            <Route path="/courses/:id" exact component={CourseCell} />
            <Route path="/courses/:id/edit" component={CourseEdit} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
