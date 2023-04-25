import React from 'react'
import styled from 'styled-components';

import PageHowToUseButtonImg from '../assets/how_to_use_button.png';
import CalenderImg from '../assets/calender_img.png';

function CalenderPage() {
  const CalenderPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
  `;

  const Calender = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: center;
    justify-content: center;
    gap: 40px;
  `;
  
  const CalenderSubTitle = {
    0: `이번 한달간 나의 소득·지출이 언제, 얼마나 있었는지,\n한달간의 내역을 한 눈에 보실 수 있습니다.`,
  }

  const PageDescription = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: start;
    justify-content: center;
    gap: 20px;
  `;

  const PageNumber = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    font-size: 80px;
    line-height: 1;
    letter-spacing: -0.25px;
    color: #12B679;
  `;

  const PageTitle = styled(PageNumber)`
    font-weight: 700;
    font-size: 42px;
    color: #000000;
  `;

  const PageSubTitle = styled(PageTitle)`
    white-space: pre-line;
    font-weight: 400;
    font-size: 18px;
    color: #222222;
  `;

  const PageHowToUse = styled(PageDescription)`
    cursor: pointer;
    flex-flow: row nowrap;
    gap: 6px;
  `;

  const PageHowToUseText = styled.a`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.25px;
    color: #666666;
  `;

  const PageHowToUseButton = styled.button`
    width: 18px;
    height: 18px;
    background-image: url(${PageHowToUseButtonImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const CalenderImage = styled.p`
    width: 1071px;
    height: 900px;
    background-image: url(${CalenderImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  return(
    <CalenderPage id='3'>
      <Calender>
        <PageDescription>
          <PageNumber>04</PageNumber>
          <PageTitle>캘린더</PageTitle>
          <PageSubTitle>{CalenderSubTitle[0]}</PageSubTitle>
        </PageDescription>
        <PageHowToUse>
          <PageHowToUseText>캘린더 사용방법 안내</PageHowToUseText>
          <PageHowToUseButton/>
        </PageHowToUse>
      </Calender>
      <CalenderImage/>
    </CalenderPage>
  );
}

export default CalenderPage;