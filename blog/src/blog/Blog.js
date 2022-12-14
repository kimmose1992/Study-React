import './Blog.css';
import React, { useState } from "react";

function Blog() {

  let [blogTitle] = useState('React Blog');
  let [listTitle, setListTitle] = useState(['List Title 03', 'List Title 02', 'List Title 01']);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [isModal, setIsModal] = useState(false);

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

  function sortListTitle() {
    let copyListTitle = [...listTitle];
    copyListTitle.sort();
    setListTitle(copyListTitle);
  }

  function blogModalView() {
    //console.log(isModal);
    //let copyIsModal = [...isModal];
    //copyIsModal = isModal ? false : true;
    setIsModal(isModal ? false : true);
  }

  return (
    <div className="Blog">

      { /* Blog Header */ }
      <div className="Blog-nav">
        <h4>{ blogTitle } <span style={{ color: 'white' }} onClick={() => { sortListTitle() }}> ✅Sort</span>
        </h4>        
      </div>

      { /* Blog List */ }
      <div className='Blog-list'>
        <h4>
          <span onClick={ blogModalView }>{ listTitle[0] }</span> 
          <span onClick={() => { addLikeCnt(0) }}>👍</span> { likeCnt[0] } 
        </h4>
        <p>2022.12.12</p>        
      </div>
      <div className='Blog-list'>
        <h4>{ listTitle[1] } <span onClick={ () => { addLikeCnt(1) }}>👍</span> { likeCnt[1] } </h4>
        <p>2022.12.12</p>        
      </div>
      <div className='Blog-list'>
        <h4>{ listTitle[2] } <span onClick={ () => { addLikeCnt(2) }}>👍</span> { likeCnt[2] } </h4>
        <p>2022.12.12</p>        
      </div>

      { /* Blog Modal */ }
      { isModal ? <BlogModal /> : null }
    </div>
  );
}

function BlogModal() {
  return (
    <div className='Blog-modal'>
      <h4>제목</h4>
      <p>내용</p>
      <p>등록일자</p>      
    </div>
  )
}

export default Blog;
