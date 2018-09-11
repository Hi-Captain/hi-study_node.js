import React, { Component } from 'react';
import axios from 'axios';

class CourseEdit extends Component {
  state = {
    id : null,
    title : '',
    language : '',
    price : ''
  }
  componentDidMount(){
    this._getData()
  }
  render() {
    const { title, language, price } = this.state;
    const isEnabled = title.length > 0 && language.length > 0 && price.length > 0
    return (
      <section className="edit">
        <div><span>title : </span><input type="text" name="title" placeholder="제목을 입력해주세요" value={title} onChange={this._typing} autoFocus/></div>
        <div><span>language : </span><input type="text" name="language" placeholder="언어를 입력해주세요" value={language} onChange={this._typing}/></div>
        <div><span>price : </span><input type="text" name="price" placeholder="가격을 입력해주세요" value={price} onChange={this._typing}/></div>
        <button className="edit-confirm" disabled={!isEnabled} onClick={this._editData}>수정하기</button>
      </section>
    );
  }
  _getData = () => {
    const { id } = this.props.match.params;
    axios.get(`/courses/${id}`).then(res => {
      this.setState(res.data);
    }).catch(e =>{
      console.log(e)
    })
  }
  _typing = (e) => {
    const key = e.target.name
    this.setState({
      [key] : e.target.value
    })
  }
  _editData = () => {
    const { id } = this.state
    axios.put(`/courses/${id}/edit`, this.state).then(res => {
      if(res.status === 200){
        alert('정상적으로 수정 되었습니다.')
        window.location.href = `/courses/${id}`
      }
    }).catch(e => {
      console.log(e)
    })
  }
}

export default CourseEdit;
