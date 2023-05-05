import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoImg from './../assets/logo.svg';
import GNBSearchButtonImg from './../assets/search_button.png';
import GNBLoginButtonImg from './../assets/login_button.png';
import GNBMenuButtonImg from './../assets/menu_button.png';
import GNBMenuButtonXImg from './../assets/menu_button_x.png';

function GNB() {
  const [ButtonImg, setButtonImg] = useState(GNBMenuButtonImg);
  const [GNBHeight, setGNBHeight] = useState('70px');
  const [GNBListWidth, setGNBListWidth] = useState('');
  const [GNBRadius, setGNBRadius] = useState(200);
  const [GNBSort, setGNBSort] = useState('row');
  const [GNBPadding, setGNBPadding] = useState('10px 10px 10px 40px');
  const [GNBGap, setGNBGap] = useState('20px');
  const MenuButtonClick = () => { // 버튼 이미지 변경
    if(ButtonImg === GNBMenuButtonImg) {
      setButtonImg(GNBMenuButtonXImg);
      setGNBHeight('auto');
      setGNBListWidth('width: 100%;');
      setGNBRadius(36);
      setGNBSort('column');
      setGNBPadding('10px 10px 50px 40px');
      setGNBGap('10px');
    } else {
      setButtonImg(GNBMenuButtonImg);
      setGNBHeight('70px');
      setGNBListWidth('');
      setGNBRadius(200);
      setGNBSort('row');
      setGNBPadding('10px 10px 10px 40px');
      setGNBGap('20px');
    }
  }
  
  const GoToLogin = () => {
    window.location.replace('/login');
  }

  const DetaileMenu = () => {
    if(ButtonImg === GNBMenuButtonImg) {
      return(
        <GNBWrapper>
          <GNBList>
            <GNBMenu>서비스 소개</GNBMenu>
            <GNBMenu>수입·지출</GNBMenu>
            <GNBMenu>캘린더</GNBMenu>
            <GNBMenu>그래프</GNBMenu>
          </GNBList>
          <GNBRowBar/>
          <GNBButtons>
            <GNBSearchButton/>
            <GNBLoginButton onClick={GoToLogin}/>
          </GNBButtons>
          <GNBMenuButton onClick={MenuButtonClick}/>
        </GNBWrapper>
      );
    } else {
      return(
        <GNBWrapper>
          <GNBButtonWrapper>
            <GNBButtons>
              <GNBSearchButton/>
              <GNBLoginButton onClick={GoToLogin}/>
            </GNBButtons>
            <GNBMenuButton onClick={MenuButtonClick}/>
          </GNBButtonWrapper>
          <GNBColumnBar/>
          <GNBList>
            <GNBMenu>서비스 소개</GNBMenu>
            <GNBMenuWrapper>
              <GNBMenu>수입·지출</GNBMenu>
              <GNBSubMenus>
                <GNBSubMenu>나의 수입</GNBSubMenu>
                <GNBSubMenu>나의 지출</GNBSubMenu>
              </GNBSubMenus>
            </GNBMenuWrapper>
            <GNBMenuWrapper>
              <GNBMenu>캘린더</GNBMenu>
              <GNBSubMenus>
                <GNBSubMenu>월간 보고서</GNBSubMenu>
                <GNBSubMenu>연간 보고서</GNBSubMenu>
              </GNBSubMenus>
            </GNBMenuWrapper>
            <GNBMenuWrapper>
              <GNBMenu>그래프</GNBMenu>
              <GNBSubMenus>
                <GNBSubMenu>원 그래프 분석</GNBSubMenu>
                <GNBSubMenu>막대 그래프 분석</GNBSubMenu>
              </GNBSubMenus>
            </GNBMenuWrapper>
          </GNBList>
        </GNBWrapper>
      );
    }
  }

  const GNB = styled.div`
    z-index: 1;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: top;
    text-align: center;
    justify-content: center;
    gap: 304px;
    padding-top: 20px;
  `;
  // margin-top: 20px; 없애줘야함

  const Logo = styled.p`
    width: 240px;
    height: 80px;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const GNBWrapper = styled.div`
    width: 636px;
    height: ${GNBHeight};
    padding: ${GNBPadding};
    gap: ${GNBGap};
    display: flex;
    flex-flow: ${GNBSort};
    align-items: center;
    text-align: center;
    justify-content: center; 
    background: #222222;
    border: 1px solid #888888;
    border-radius: ${GNBRadius}px;  
  `
  // height: 70으로 설정해야함

  const GNBList = styled.div`
    ${GNBListWidth};
    display: flex;
    gap: 50px;
    align-items: top;
    text-align: center;
    justify-content: start; 
  `;

  const GNBMenuWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: center;
    justify-content: center; 
    gap: 20px;
  `;

  const GNBMenu = styled.a`
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #FFFFFF;
  `

  const GNBSubMenus = styled(GNBMenuWrapper)`
    gap: 14px;
  `;

  const GNBSubMenu = styled(GNBMenu)`
    font-weight: 400;
    font-size: 16px;
    color: #888888;
    &:hover{
      color: rgba(18, 182, 121, 1);
    }
  `;

  const GNBRowBar = styled.p`
    width: 2px;
    height: 20px;
    background: #D9D9D9;
    opacity: 0.4;
  `;

  const GNBColumnBar = styled(GNBRowBar)`
    width: 556px;
    height: 2px;
    margin-right: 30px;
    margin-bottom: 20px;
  `;

  const GNBButtons = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 14px;
  `;

  const GNBButtonWrapper = styled(GNBButtons)`
    width: 100%;
    gap: 20px;
    justify-content: right;    
  `;


  const GNBSearchButton = styled.p`
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-image: url(${GNBSearchButtonImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const GNBLoginButton = styled(GNBSearchButton)`
    background-image: url(${GNBLoginButtonImg});
  `;

  const GNBMenuButton = styled.p`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-image: url(${ButtonImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  return(
    <GNB>
      <Logo/>
      {DetaileMenu()}
    </GNB>
  );
}

export default GNB;