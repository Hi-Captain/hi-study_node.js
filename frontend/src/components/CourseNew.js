import React, { Component } from 'react';
import axios from 'axios';

class CourseNew extends Component {
  state = {
    title : '',
    language : '',
    price : ''
  }

  render() {
    const {title, language, price} = this.state
    const isEnabled = title.length > 0 && language.length > 0 && price.length > 0
    return (
      <section className="new">
        <div><span>title : </span><input type="text" name="title" placeholder="제목을 입력해주세요" value={title} onChange={this._typing} autoFocus/></div>
        <div><span>language : </span><input type="text" name="language" placeholder="언어를 입력해주세요" value={language} onChange={this._typing}/></div>
        <div><span>price : </span><input type="text" name="price" placeholder="가격을 입력해주세요" value={price} onChange={this._typing}/></div>
        <button className="add-confirm" disabled={!isEnabled} onClick={this._addClass}>추가하기</button>
      </section>
    );
  }
  _typing = (e) => {
    const key = e.target.name
    this.setState({
      [key] : e.target.value
    })
  }
  _addClass = () => {
    axios.post('/courses/new', this.state).then(res => {
      if(res.status === 200){
        alert('정상적으로 등록 되었습니다.')
        this.setState({
          title : '',
          language : '',
          price : ''
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }
}

export default CourseNew;
