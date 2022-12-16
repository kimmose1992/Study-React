import './Blog.css';
import React, { useState, useRef } from "react";

function Blog() {

  let [blogTitle] = useState('React Blog');
  let [listTitle, setListTitle] = useState(['List Title 03', 'List Title 02', 'List Title 01']);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [modalView, setModalView] = useState([false, -1]);

  let writeTitle = '';
  let writeInput = useRef();

  /*
  const sortListTitle = () => {
    let copyListTitle = [...listTitle];
    copyListTitle.sort();
    setListTitle(copyListTitle);    
  }

  const addLikeCnt = (idx) => {
    let copyLikeCnt =  [...likeCnt];
    copyLikeCnt[idx]++;
    setLikeCnt(copyLikeCnt); 
  }
  
  const changeBlogTitle = () => {
    setBlogTitle(preBlogTitle => preBlogTitle + ' Change ');
  }
  */  

  function addLikeCnt(idx) {
    let copyLikeCnt =  [...likeCnt];
    copyLikeCnt[idx]++;
    setLikeCnt(copyLikeCnt);
  }

  function modListTitle(idx) {
    let copyListTitle = [...listTitle];
    copyListTitle[idx] = copyListTitle[idx] + ' Change';
    setListTitle(copyListTitle);
  }

  function sortListTitle() {
    let copyListTitle = [...listTitle];
    copyListTitle.sort();
    setListTitle(copyListTitle);
  }

  function blogModalView(idx) {
    
    let copyModalView = [...modalView];
    let isModal = copyModalView[0];
    let modalIdx = copyModalView[1];

    if (modalIdx == idx){
      isModal = false;
    } else {
      isModal = true;
      modalIdx = idx;
    }

    copyModalView[0] = isModal;
    copyModalView[1] = modalIdx;
    setModalView(copyModalView);
  }

  function blogWrite() {
    
    if (writeTitle == '') {
      alert('제목을 입력해주세요.');
    } else {
      let copyListTitle = [...listTitle];
      copyListTitle.unshift(writeTitle);
      setListTitle(copyListTitle);

      let copyLikeCnt = [...likeCnt];
      copyLikeCnt.unshift(0);
      setLikeCnt(copyLikeCnt);

      writeInput.current.value = '';
    }
  }

  return (
    <div className="Blog">

      { /* Blog Header */ }
      <div className="Blog-nav">
        <h4>{ blogTitle } <span style={{ color: 'white' }} onClick={() => { sortListTitle() }}> ✅Sort</span>
        </h4>        
      </div>

      { /* Blog List */ }
      {
        listTitle.map(function(data, idx){
          return (
            <div key={ data } title={ listTitle[idx] } className='Blog-list'>
              <h4>
                <span onClick={() => { blogModalView(idx) }}>{ listTitle[idx] }</span> 
                <span onClick={() => { addLikeCnt(idx) }}> 👍</span> { likeCnt[idx] } 
              </h4>
              <p>2022.12.12</p>        
            </div>
          )
        })
      }

      { /* Blog Write */ }
      <div className="Blog-nav">
        <input type='text' ref={ writeInput } onBlur={(e) => {  
          writeTitle = e.target.value;
        }}></input>
        <button onClick={() => { blogWrite() }}>글등록</button>
        <button onClick={() => { console.log(1) }}>초기화</button>
      </div>

      { /* Blog Modal */ }
      { 
        modalView[0] ? <BlogModal listTitle={ listTitle } idx={ modalView[1] } modListTitle={ modListTitle } /> : null 
      }
    </div>
  );
}

function BlogModal(props) {
  return (
    <div className='BlogModal'>
      <div className='Blog-modal'>
        <h4>제목: { props.listTitle[props.idx] }</h4>
        <p>내용</p>
        <p>등록일자</p>      
        <button onClick={() => props.modListTitle(props.idx) }>제목 수정</button>
      </div>
    </div>
  )
}

export default Blog;
