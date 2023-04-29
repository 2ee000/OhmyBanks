import React, { useState } from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import SignupNaverImg from '../assets/login_naver.png';
import SignupKakaoImg from '../assets/login_kakao.png';
import SignupAppleImg from '../assets/login_apple.png';

import ArrowImg from '../assets/signup_arrow.png';

import CheckBoxImgGray from '../assets/checkbox_gray.png';
import CheckBoxImgGreen from '../assets/checkbox_green.png';


function Signup() {
  const [Step, setStep] = useState(0);
  const [SignupWrapperGap, setSignupWrapperGap] = useState('50px;');
  const Steps = () => {
    if(Step === 0) {
      return(
          <SignupWrapper>
            <SignupTextWrapper>
              <SignupText>회원가입</SignupText>
              <TitleWrapper>
                <Title><TitleGreen>오마이뱅스</TitleGreen>에 오신걸 환영합니다!</Title>
                <SubTitle>{SubTitleText[0]}</SubTitle>
              </TitleWrapper>
            </SignupTextWrapper>
            <SignupButton onClick={() => {setStep(1); setSignupWrapperGap('100px')}}>회원가입</SignupButton>
            <AnotherSignup>
              <AnotherSignupText>간편하게 시작하기</AnotherSignupText>
              <AnotherSignupButton>
                <SignupNaver/>
                <SignupKakao/>
                <SignupApple/>
              </AnotherSignupButton>
            </AnotherSignup>
          </SignupWrapper>
      )
    } else if(Step === 1) {
      return(
        <SignupWrapper>
          <SignupTitleWrapper>
            <SignupTexts>
              <SignupStepText>STEP 1</SignupStepText>
              <SignupTitle>본인인증</SignupTitle>
              <SignupSubTitle>오마이뱅스 회원가입을 위한 본인인증 절차입니다.</SignupSubTitle>
            </SignupTexts>
            <SignupStep>
              <SignupStepNumber>1</SignupStepNumber>
              <SignupStepButton/>
              <SignupStepButton/>
              <SignupStepButton/>
            </SignupStep>
          </SignupTitleWrapper>
          <Certification>
            <SignupWhiteButtons>
              <SignupWhiteButton>휴대폰 인증<Arrow/></SignupWhiteButton>
              <SignupWhiteButton>아이핀(I-PIN) 인증<Arrow/></SignupWhiteButton>
            </SignupWhiteButtons>
            <SignupLists>
              <SignupList>{SignupListText[0]}</SignupList>
              <SignupList>{SignupListText[1]}</SignupList>
              <SignupList>{SignupListText[2]}</SignupList>
            </SignupLists>
          </Certification>
        </SignupWrapper>
      )
    }
  }

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
    gap: ${SignupWrapperGap};
  `;

  const SignupTitleWrapper = styled(SignupWrapper)`
    width: 670px;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 0px;
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

  const SignupTexts = styled(SignupWrapper)`
    align-items: start;
    gap: 20px;
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
  const SignupStep = styled(SignupWrapper)`
  flex-flow: row nowrap;
  gap: 12px;
`;

const SignupStepNumber = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #12B679;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: -0.25px;
  color: #FFFFFF;
  align-items: center;
  text-align: bottom;
  justify-content: center;
`;

const SignupStepButton = styled.p`
  width: 10px;
  height: 10px;
  background: #DDDDDD;
  border-radius: 100%;
`;

const SignupStepText = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.25px;
  color: #666666;
`;
const SignupTitle = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #222222;
  `;

  const SignupSubTitle = styled(SignupTitle)`
    font-weight: 400;
    font-size: 16px;
    color: #666666;  
  `;

  const Certification = styled(SignupWrapper)`
    gap: 50px;
  `;

  const SignupWhiteButtons = styled(SignupWrapper)`
    gap: 10px;
  `;

  const SignupWhiteButton = styled.button`
    width: 670px;
    height: 108px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 30px 40px;
    gap: 10px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 6px;    
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #000000;
  `;

  const Arrow = styled.p`
    width: 48px;
    height: 48px;
    background-image: url(${ArrowImg});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const SignupLists = styled(SignupWrapper)`
    align-items: start;
    text-align: start;
    gap: 20px;
  `;

  const SignupList = styled.li`
    width: 660px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #666666;
    white-space: pre-line;
  `;

  const SignupListText = {
    0: `입력하신 정보는 본인확인을 위해 해당 인증기관에서 직접 수집하며,\n본인 확인 용도 외에 사용되거나 저장되지 않습니다.`,
    1: `정보통신망법(2012.08.18 시행) 제 23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을\n제한합니다.`,
    2: `만 14세 미만은 회원가입을 제한합니다.`,
  }

  return(
    <App>
      <Blur>
        <Signup>
          {Steps()}
        </Signup>
      </Blur>
    </App>
  );
}

export default Signup;