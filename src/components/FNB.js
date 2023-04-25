import React from 'react';
import styled from 'styled-components';

import LogoImg from './../assets/logo.png';
import FacebookButtonImg from './../assets/facebook_button.png';
import YoutubeButtonImg from './../assets/youtube_button.png';
import BlogButtonImg from './../assets/blog_button.png';

function FNB() {
  const FNB = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center; 
    background-color: #151515;
    gap: 151px;
  `;

  const Logo = styled.p`
    width: 174px;
    height: 80px;
    background-image: url(${LogoImg});
  `;

  const About = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: center;
    justify-content: center;
    gap: 24px;
  `;

  const AboutTexts = styled(About)`
    gap: 10px;
  `;

  const AboutText = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #666666;
  `;

  const AboutGap = styled.p`
    height: 4px;
  `;

  const Buttons = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: right;
    text-align: center;
    justify-content: right;
    gap: 104px;
  `;

  const Menus = styled(Buttons)`
    flex-flow: row nowrap;
    gap: 80px;
  `;

  const Menu = styled(AboutText)`
    cursor: pointer;
    color: #888888;
    &:hover {
      color: #FFFFFF;
    }
  `;

  const Sns = styled(Menus)`
    gap: 32px;
  `;

  const FacebookButton = styled.button`
    width: 42px;
    height: 42px;
    background-image: url(${FacebookButtonImg});
  `;

  const YoutubeButton = styled(FacebookButton)`
    background-image: url(${YoutubeButtonImg});
  `;

  const BlogButton = styled(FacebookButton)`
    background-image: url(${BlogButtonImg});
  `;

  return(
    <FNB>
      <About>
        <Logo/>
        <AboutTexts>
          <AboutText>(주)오바이뱅스 : 서울특별시 강남구 강남대로 464 비제바노 [06123]</AboutText>
          <AboutText>COPYRIGHT 2023 OH MY BANCKS.,LTD. ALL RIGHT RESERVED.</AboutText>
          <AboutGap/>
          <AboutText>PLANNING : 박정현·이주현 | FRONT : 이주현 | BACKEND : 박정현</AboutText>
          <AboutText>고객센터 : 02-8888-8888 | 010-0000-0000</AboutText>
        </AboutTexts>
      </About>
      <Buttons>
        <Menus>
          <Menu>서비스 소개</Menu>
          <Menu>수입·지출</Menu>
          <Menu>캘린더</Menu>
          <Menu>그래프</Menu>
        </Menus>
        <Sns>
          <FacebookButton/>
          <YoutubeButton/>
          <BlogButton/>
        </Sns>
      </Buttons>
    </FNB>
  );
}

export default FNB;