import React from 'react'
import styled from 'styled-components';

import PageHowToUseButtonImg from '../assets/how_to_use_button.png';
import ListImg from '../assets/list_img.png';

function ListPage() {
  const ListPage = styled.div`
    width: 100%;
    height: 100vh;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: end;
    gap: 40px;
    scroll-snap-type: y proximity;
  `;

  const PageDescription = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
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
    width: 351px;
    font-weight: 400;
    font-size: 18px;
    color: #222222;
  `;

  const ListSubTitle = {
    0: `최근 나의 소득, 지출이 언제, 얼마나, 어떤 용도에\n사용되었는지 한 눈에 보실 수 있습니다.`,
  }

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

  const AboutList = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  `;

  const ListImage = styled.p`
    width: 1236px;
    height: 684px;
    background-image: url(${ListImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const ListText = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 200px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.5px;
    color: #222222;
    opacity: 0.06;
  `;

  return(
    <ListPage id='1'>
      <PageDescription>
        <PageNumber>01</PageNumber>
        <PageTitle>리스트</PageTitle>
        <PageSubTitle>{ListSubTitle[0]}</PageSubTitle>
      </PageDescription>
      <PageHowToUse>
        <PageHowToUseText>리스트 사용방법 안내</PageHowToUseText>
        <PageHowToUseButton/>
      </PageHowToUse>
      <AboutList>
        <ListText>MY</ListText>
        <ListImage/>
        <ListText>LIST</ListText>
      </AboutList>
    </ListPage>
  );
}

export default ListPage;