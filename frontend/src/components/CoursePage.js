import React, { Component } from 'react';
import CourseList from './CourseList';

class CoursePage extends Component {
  render() {
    return (
      <section className="courses">
        <CourseList />
      </section>
    );
  }
}

export default CoursePage;
