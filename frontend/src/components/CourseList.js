import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CourseList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    }
  }
  componentDidMount(){
    this._getList()
  }
  render() {
    const { list } = this.state
    const courses = list.map((course) => {
      return (
        <Link to={`/courses/${course.id}`} key={course.id}>
          {course.title}
        </Link>
      )
    }) 
    return (
      <div className="list">
        <button className="refresh" onClick={this._getList}> 새로고침</button>
        <div className="list-container">
          {courses}
        </div>
        <Link className="create" to="/courses/new">과목 추가하기</Link>
      </div>
    );
  }

  _getList = () => {
    axios.get('/courses').then(res => {
      this.setState({
        list : res.data
      })
    }).catch(e =>{
      console.log(e)
    })
  }
}

export default CourseList;
