import React from 'react'
import styled from 'styled-components';

import AboutImg from '../assets/about_img.png';

function AboutPage() {
  const AboutPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
    gap: 50px;
  `;

  const AboutSubTitle = {
    0: `나의 소비와 생활패턴까지 분석하는 오마이뱅스와 함께\n나만의 커스텀 가계부를 만들어보세요.`,
  }

  const AboutImage = styled.p`
    width: 382px;
    height: 382px;
    background-image: url(${AboutImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const PageDescription = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 20px;
  `;

  const PageTitle = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 1;
    letter-spacing: -0.25px;
    color: #000000;
  `;

  const PageSubTitle = styled(PageTitle)`
    white-space: pre-line;
    font-weight: 400;
    font-size: 18px;
    color: #222222;
  `;

  return(
    <AboutPage id='4'>
      <PageDescription>
        <PageTitle>만들자, 나만의 커스텀 가계부!</PageTitle>
        <PageSubTitle>{AboutSubTitle[0]}</PageSubTitle>
      </PageDescription>
      <AboutImage/>
    </AboutPage>
  );
}

export default AboutPage;