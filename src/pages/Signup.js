import React from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import SaveIDCheckImgGray from '../assets/save_id_check_gray.png';
import SaveIDCheckImgGreen from '../assets/save_id_check_green.png';
import SignupNaverImg from '../assets/login_naver.png';
import SignupKakaoImg from '../assets/login_kakao.png';
import SignupAppleImg from '../assets/login_apple.png';


function Signup() {
  const App = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const Blur = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: right;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  `;

  const Signup = styled.div`
    width: 1245px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
  `;

  const SignupWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 50px;
  `;

  const SignupTextWrapper = styled(SignupWrapper)`
    gap: 80px;
  `;

  const SignupText = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #222222;
  `;

  const TitleWrapper = styled(SignupWrapper)`
    gap: 30px;
  `;

  const Title = styled.span`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #000000;
  `;

  const TitleGreen = styled(Title)`
    font-weight: 700;
    color: #12B679;
  `;

  const SubTitle = styled(SignupText)`
    white-space: pre-line;
    font-size: 18px;
    color: #666666;
  `;

  const SubTitleText = {
    0: `회원가입 후 나만의 소비는 물론 생활패턴까지\n분석하는 나만의 커스텀 가계부 서비스를 경험해 보세요`,
  }

  const SignupButton = styled.button`
    width: 670px;
    height: 66px;
    padding: 24px 130px;
    background: #12B679;
    border-radius: 6px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #FFFFFF;
  `;

  const AnotherSignup = styled(SignupWrapper)`
    gap: 30px;
  `;

  const AnotherSignupText = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #888888;
    &::before, &::after{
      margin-bottom: 8.5px;
      content: '';
      color: #888888;
      background-color: #888888;
      display: inline-block;
      width: 258px;
      height: 1px;
    }
    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  `;

  const AnotherSignupButton = styled(AnotherSignup)`
    flex-flow: row nowrap;
  `;

  const SignupNaver = styled.button`
    width: 60px;
    height: 60px;
    background-image: url(${SignupNaverImg});
  `;

  const SignupKakao = styled(SignupNaver)`
    background-image: url(${SignupKakaoImg});  
  `;

  const SignupApple = styled(SignupNaver)`
    background-image: url(${SignupAppleImg});  
  `;

  return(
    <App>
      <Blur>
        <Signup>
          <SignupWrapper>
            <SignupTextWrapper>
              <SignupText>회원가입</SignupText>
              <TitleWrapper>
                <Title><TitleGreen>오마이뱅스</TitleGreen>에 오신걸 환영합니다!</Title>
                <SubTitle>{SubTitleText[0]}</SubTitle>
              </TitleWrapper>
            </SignupTextWrapper>
            <SignupButton>회원가입</SignupButton>
            <AnotherSignup>
              <AnotherSignupText>간편하게 시작하기</AnotherSignupText>
              <AnotherSignupButton>
                <SignupNaver/>
                <SignupKakao/>
                <SignupApple/>
              </AnotherSignupButton>
            </AnotherSignup>
          </SignupWrapper>
        </Signup>
      </Blur>
    </App>
  );
}

export default Signup;