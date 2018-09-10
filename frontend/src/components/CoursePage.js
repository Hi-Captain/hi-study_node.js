import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList';

class CoursePage extends Component {
  render() {
    return (
      <section>
        <CourseList />
        <Link to="/courses/new">과목 추가하기</Link>
      </section>
    );
  }
}

export default CoursePage;
