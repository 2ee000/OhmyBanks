import React from 'react'
import styled, { keyframes } from 'styled-components';

import background from '../assets/background.png';
import AppStoreButtonImg from '../assets/appStore_green_button.png';
import GooglePlayButtonImg from '../assets/googlePlay_green_button.png';

function HomePage() {
  const HomePage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: end;  
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    gap: 100px;
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
    white-space: pre-line;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 92px;
    letter-spacing: -0.25px;
    line-height: 1.2; // Figma에서 Paragraph spacing이 20들어가 있음
    color: #FFFFFF;
  `;

  const HomeTitle = {
    0: `금융을 내 편으로\n오마이뱅스`,
  }

  const SubTitle = styled(Title)`
    font-weight: 500;
    font-size: 26px;
  `;

  const HomeSubTitle = {
    0: `오마이뱅스는 나의 소비는 물론 생활패턴까지\n분석하는 나만의 커스텀 가계부 서비스 입니다.`,
  }

  const HomePageGradation = styled.div`
    width: 100vw;
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
    opacity: 0.5;
  `;

  const ScrollDownAnimation = keyframes`
    0% {
      top: 0px;
    }
    50% {
      top: 30px;
    }
    100% {
      top: 0px;
    }
  `;

  const ScrollDownButtonWrapper = styled.div`
    width: 2px;
    height: 60px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
  `

  const ScrollDownButton = styled.p`
    width: 2px;
    height: 30px;
    opacity: 1;
    background: #FFFFFF;
    position: relative;
    animation: ${ScrollDownAnimation} 2s linear infinite;
  `;

  return(
    <HomePage id='0'>
      <TitleWrapper>
        <Title>{HomeTitle[0]}</Title>
        <SubTitle>{HomeSubTitle[0]}</SubTitle>
      </TitleWrapper>
      <HomePageGradation>
        <DownloadButtons>
          <AppStoreButton/>
          <GooglePlayButton/>
        </DownloadButtons>
        <ScrollDown>
          <ScrollDownText>SCROLL DOWN</ScrollDownText>
          <ScrollDownButtonWrapper>
            <ScrollDownButton/>
          </ScrollDownButtonWrapper>
        </ScrollDown>
      </HomePageGradation>
    </HomePage>
  );
}

export default HomePage;