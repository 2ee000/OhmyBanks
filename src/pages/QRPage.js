import React from 'react'
import styled from 'styled-components';

import AppStoreButtonImg from '../assets/appStore_white_button.png';
import GooglePlayButtonImg from '../assets/googlePlay_white_button.png';
import QRcodeImg from '../assets/QRcode.png';

function QRPage() {
  const QRPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
    gap: 180px;
  `;

  const QRTitle = {
    0: `이 모든 것, 오마이뱅스와 함께\n나만의 가계부를 만들어보세요.`,
  }
  const PageDescription = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 90px;
  `;

  const PageTitle = styled.p`
    white-space: pre-line;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 1;
    letter-spacing: -0.25px;
    color: #000000;
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
    filter: drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.16));
  `;

  const GooglePlayButton = styled(AppStoreButton)`
    background-image: url(${GooglePlayButtonImg});
  `;

  const QRcode = styled.p`
    width: 256px;
    height: 256px;
    background-image: url(${QRcodeImg});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  return(
    <QRPage id='5'>
      <PageDescription>
        <PageTitle>{QRTitle[0]}</PageTitle>
        <DownloadButtons>
          <AppStoreButton/>
          <GooglePlayButton/>
        </DownloadButtons>
      </PageDescription>
      <QRcode/>
    </QRPage>
  );
}

export default QRPage;