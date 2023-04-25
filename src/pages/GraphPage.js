import React from 'react'
import styled from 'styled-components';

import PageHowToUseButtonImg from '../assets/how_to_use_button.png';
import LineGraphImg from '../assets/line_graph_img.png';
import CircleGraphImg from '../assets/circle_graph_img.png';

function GraphPage() {
  const GraphPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #F5F5F5;
  `;

  const LineGraph = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: start;
    justify-content: end;
    gap: 40px;
  `;

  const LineGraphImage = styled.p`
    width: 489px;
    height: 670px;
    background-image: url(${LineGraphImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const LineSubTitle = {
    0: `지난 주와 이번 주, 지난 달과 이번 달, 작년과 올해를\n비교하여 소득과 지출의 변동을 한 눈에 보실 수 있습니다.`,
  }

  const CircleGraph = styled(LineGraph)`
    justify-content: start;
  `;

  const CircleGraphImage = styled(LineGraphImage)`
    width: 457px;
    height: 664px;
    background-image: url(${CircleGraphImg});
  `;
  
  const CircleSubTitle = {
    0: `이번 한달간 나의 소득·지출은 어떤 용도로 가장 많이\n사용되었는지 한 눈에 보실 수 있습니다.`,
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

  return(
    <GraphPage id='2'>
      <LineGraph>
        <PageDescription>
          <PageNumber>02</PageNumber>
          <PageTitle>선 그래프</PageTitle>
          <PageSubTitle>{LineSubTitle[0]}</PageSubTitle>
        </PageDescription>
        <PageHowToUse>
          <PageHowToUseText>선 그래프 사용방법 안내</PageHowToUseText>
          <PageHowToUseButton/>
        </PageHowToUse>
        <LineGraphImage/>
      </LineGraph>
      <CircleGraph>
        <CircleGraphImage/>
        <PageDescription>
          <PageNumber>03</PageNumber>
          <PageTitle>원 그래프</PageTitle>
          <PageSubTitle>{CircleSubTitle[0]}</PageSubTitle>
        </PageDescription>
        <PageHowToUse>
          <PageHowToUseText>원 그래프 사용방법 안내</PageHowToUseText>
          <PageHowToUseButton/>
        </PageHowToUse>
      </CircleGraph>
    </GraphPage>
  );
}

export default GraphPage;