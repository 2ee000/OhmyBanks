import React from 'react'
import styled from 'styled-components';
import { Link } from "react-scroll"

import GNB from '../components/GNB';
import FNB from '../components/FNB';
import Top from '../components/Top';

import HomePage from './HomePage';
import ListPage from './ListPage';
import GraphPage from './GraphPage';
import CalenderPage from './CalenderPage';
import AboutPage from './AboutPage';
import QRPage from './QRPage';

import ScrollButtonGrayImg from '../assets/scroll_button_gray.png';
import ScrollButtonGreenImg from '../assets/scroll_button_green.png';

function Home() {
  const App = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;  
  `;

  const Scroll = styled.div`
    z-index: 1;
    position: fixed;
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 14px;
  `;

  const ScrollButton = styled.button`
    width: 28px;
    height: 28px;
    background-image: url(${ScrollButtonGrayImg});
    &:hover {
      background-image: url(${ScrollButtonGreenImg});
    }
    &:focus{
      background-image: url(${ScrollButtonGreenImg});
    }
  `;

  return(
    <App>
      <GNB/>
      <Top/>
      <Scroll>
        <Link to='0' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
        <Link to='1' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
        <Link to='2' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
        <Link to='3' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
        <Link to='4' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
        <Link to='5' spy={true} smooth={true}>
          <ScrollButton/>
        </Link>
      </Scroll>
      <HomePage/>
      <ListPage/>
      <GraphPage/>
      <CalenderPage/>
      <AboutPage/>
      <QRPage/>
      <FNB/>
    </App>
  );
}

export default Home;