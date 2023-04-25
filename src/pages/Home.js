import React from 'react'
import styled from 'styled-components';

import GNB from '../components/GNB';
import FNB from '../components/FNB';
import Top from '../components/Top';

import background from '../assets/background.png';
import ScrollButtonGrayImg from '../assets/scroll_button_gray.png';
import ScrollButtonGreenImg from '../assets/scroll_button_green.png';
import AppStoreButtonImg from '../assets/appStore_button.png';
import GooglePlayButtonImg from '../assets/googlePlay_button.png';
import ScrollDownImg from '../assets/scroll_down.png';
import PageHowToUseButtonImg from '../assets/how_to_use_button.png';

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

  const HomePage = styled(App)`
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: end;
    gap: 24px;
  `;

  const TitleWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 50px;
    filter: drop-shadow(2px 2px 18px rgba(0, 0, 0, 0.4));
  `;

  const Title = styled.p`
    width: 633px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 92px;
    letter-spacing: -0.25px;
    line-height: 1.2; // Figma에서 Paragraph spacing이 20들어가 있음
    color: #FFFFFF;
  `;

  const SubTitle = styled(Title)`
    width: 487px;
    font-weight: 500;
    font-size: 26px;
  `;

  const HomePageGradation = styled.div`
    width: 100vw;
    height: 400px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    gap: 158px;
  `;

  const DownloadButtons = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 30px;
  `;

  const AppStoreButton = styled.button`
    cursor: pointer;
    width: 220px;
    height: 67px;
    background-image: url(${AppStoreButtonImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const GooglePlayButton = styled(AppStoreButton)`
    background-image: url(${GooglePlayButtonImg});
  `;

  const ScrollDown = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 20px;
  `;

  const ScrollDownText = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1em;
    letter-spacing: -0.25px;
    color: #FFFFFF;
  `;

  const ScrollDownImage = styled.p`
    width: 2px;
    height: 60px;
    background-image: url(${ScrollDownImg});
  `

  const ListPage = styled(App)`
    height: 100vh;
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
    font-weight: 400;
    font-size: 18px;
    color: #222222;
  `;

  const PageHowToUse = styled(PageDescription)`
    flex-flow: row nowrap;
    gap: 6px;
  `;

  const PageHowToUseText = styled.a`
    cursor: pointer;
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
    <App>
      <GNB/>
      <Top/>
      <Scroll>
        <ScrollButton/>
        <ScrollButton/>
        <ScrollButton/>
        <ScrollButton/>
        <ScrollButton/>
        <ScrollButton/>
      </Scroll>
      <HomePage>
        <TitleWrapper>
          <Title>금융을 내 편으로오마이뱅스</Title>
          <SubTitle>오마이뱅스는 나의 소비는 물론 생활패턴까지 분석하는 나만의 커스텀 가계부 서비스 입니다.</SubTitle>
        </TitleWrapper>
        <HomePageGradation>
          <DownloadButtons>
            <AppStoreButton/>
            <GooglePlayButton/>
          </DownloadButtons>
          <ScrollDown>
            <ScrollDownText>SCROLL DOWN</ScrollDownText>
            <ScrollDownImage/>
          </ScrollDown>
        </HomePageGradation>
      </HomePage>
      <ListPage>
        <PageDescription>
          <PageNumber>01</PageNumber>
          <PageTitle>리스트</PageTitle>
          <PageSubTitle>최근 나의 소득, 지출이 언제, 얼마나, 어떤 용도에 사용되었는지 한 눈에 보실 수 있습니다.</PageSubTitle>
        </PageDescription>
        <PageHowToUse>
          <PageHowToUseText>리스트 사용방법 안내</PageHowToUseText>
          <PageHowToUseButton/>
        </PageHowToUse>
      </ListPage>
      <FNB/>
    </App>
  );
}

export default Home;