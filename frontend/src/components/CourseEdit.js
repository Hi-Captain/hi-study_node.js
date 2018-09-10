import React, { Component } from 'react';

class CourseEdit extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <section>
        과목 {id} 수정 페이지 입니다.
      </section>
    );
  }
}

export default CourseEdit;
