import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Btns = ({courseId}) => {
  const click = () => {
    const confirm = window.confirm('정말 삭제 하시겠습니까?')
    if(confirm){
      axios.delete(`/courses/${courseId}`).then(res => {
        if(res.status === 200){
          alert('정상적으로 삭제 되었습니다.')
          window.location.href = '/courses/'
        }
      }).catch(e => {
        console.log(e)
        if(e.request.status === 500){
          alert('해당 과목은 삭제가 불가능한 과목입니다.')
        }
      })
    }
  }

  return (
    <div>
      <Link className="edit-btn" to={`/courses/${courseId}/edit`}> 수정하기 </Link>
      <button className="del-btn" onClick={click}> 삭제하기 </button>
    </div>
  );
}

export default Btns;
