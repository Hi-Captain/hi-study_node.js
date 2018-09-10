import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCell extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <section>
        과목 {id} 상세 페이지입니다.
        <Link to={`/courses/${id}/edit`}> 수정하기 </Link>
      </section>
    );
  }
}

export default CourseCell;
