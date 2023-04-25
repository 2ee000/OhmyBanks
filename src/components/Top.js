import React from 'react';
import styled from 'styled-components';

import TopButtonImg from './../assets/top_button.png';

function Top() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  const TopButton = styled.button`
    z-index: 1;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 60px;
    height: 60px;
    margin: 0;
    padding: 0;
    background-image: url(${TopButtonImg});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 100%;
    box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.2);
  `;


  return(
    <TopButton onClick={scrollToTop}/>
  );
}

export default Top;