import React, { Component } from 'react';
import axios from 'axios';
import Btns from './Btns';

class CourseCell extends Component {
  state = {
    id : null,
    title : null,
    language : null,
    price : null
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    axios.get(`/courses/${id}`).then(res => {
      if(res.status === 200){
        this.setState(res.data);
      }
    }).catch(e =>{
      e.request.status === 500 ? alert('해당 과목을 찾을 수 없습니다.') : console.log(e)
    })
  }

  render() {
    const {id, title, language, price} = this.state
    return (
      <section className="course">
        <div className="course-container">
          <h1>{title}</h1>
          <h3>언어 : {language}</h3>
          <p>가격 : {price}원</p>
        </div>
        {id ? <Btns courseId={id} /> : null }
      </section>
    );
  }
}

export default CourseCell;
