import React, { useState } from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import SignupNaverImg from '../assets/login_naver.png';
import SignupKakaoImg from '../assets/login_kakao.png';
import SignupAppleImg from '../assets/login_apple.png';

import ArrowImg from '../assets/signup_arrow.png';

import CircleCheckBoxImgGray from '../assets/circle_checkbox_gray.png';
import CircleCheckBoxImgGreen from '../assets/circle_checkbox_green.png';
import DefaultCheckBoxImgGray from '../assets/default_checkbox_gray.png';
import DefaultCheckBoxImgGreen from '../assets/default_checkbox_green.png';

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
height: 100vh;
display: flex;
align-items: center;
text-align: center;
justify-content: right;
background: rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
overflow: auto;
&::-webkit-scrollbar {
  display: none;
}
`;

const SignupNoScroll = styled.div`
width: 1245px;
height: 100vh;
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
justify-content: center;
background: #FFFFFF;
`;

const SignupScroll = styled(SignupNoScroll)`
height: fit-content;
position: fixed;
top: 0;
right: 0;
padding: 130px 0;
overflow: scroll;
&::-webkit-scrollbar {
  display: none;
}
`;

const SignupWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
justify-content: center;
gap: 80px;
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
text-align: start;
gap: 20px;
`;

const TitleWrapper = styled(SignupWrapper)`
gap: 30px;
`;

const Title = styled.span`
white-space: pre-line;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 100%;
letter-spacing: -0.25px;
color: #000000;
`;

const TitleGreen = styled(Title)`
cursor: pointer;
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
white-space: pre-line;
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

const SignupSubTitleText = {
0: `오마이뱅스 회원이 되시면 여러분의 성향을 분석한 다양한 회원님의\n소비 습관을 확인하실 수 있습니다.`,
}

const Agreement = styled(SignupWrapper)`
gap: 50px;
`;

const CircleCheckBox = styled.input`
cursor: pointer;
appearance: none;
width: 40px;
height: 40px;
background-image: url(${CircleCheckBoxImgGray});
background-repeat: no-repeat;
background-size: cover;
&:checked {
  background-image: url(${CircleCheckBoxImgGreen});
}
`;

const AgreementLists = styled(SignupWrapper)`
gap: 10px;
`;

const AgreementList = styled.div`
width: 670px;
height: 66px;
padding: 0px 40px;
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.25px;
text-decoration-line: underline;
color: #000000;
`;

const Information = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: start;
text-align: center;
justify-content: center;
gap: 50px;
`;

const InformationWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: start;
text-align: center;
justify-content: center;
gap: 20px;
`;

const InformationTitle = styled.p`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.25px;
color: #000000;
`;

const InformationSubTitle = styled(InformationTitle)`
white-space: pre-line;
font-weight: 400;
font-size: 18px;
color: #888888;
text-align: start;
`;

const InformationSubTitleText = `오마이뱅스에서 제공되는 서비스에 대한 수신동의 여부를 선택해 주세요.\n(단, 회원가입 / 서비스 홍보 / 주요정책 관련 정보는 수신 동의와 관계없이 발송 됩니다.)`;

const InformationContents = styled(InformationWrapper)`
align-items: start;
gap: 16px;    
`;

const Profile = styled(InformationContents)`
width: 670px;
padding: 30px;
background-color: #F5F5F5;
border-radius: 6px;    
`;

const ProfileWrapper = styled(InformationContents)`
flex-flow: row nowrap;
`;

const ProfileTitle = styled.p`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.25px;
color: #666666;
`;

const ProfileContent = styled(ProfileTitle)`
font-weight: 400;
color: #000000;
`;

const InformationContent = styled.input`
width: 670px;
padding: 24px 0px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.25px;
color: #222222;
border: none;
border-bottom: 1px solid #DDDDDD;
&::placeholder {
  color: #888888;
}
`;

const CheckBoxs = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 20px;
`;

const CheckBoxWrapper = styled.div `
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 8px;
`;

const DefaultCheckBox = styled.p`
appearance: none;
width: 16px;
height: 16px;
background-image: url(${DefaultCheckBoxImgGray});
background-repeat: no-repeat;
background-size: cover;
`;

const CheckText = styled.p`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 100%;
letter-spacing: -0.25px;
color: #888888;
`;

const MarketingWrapper = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 40px;
`;

const Marketing = styled(MarketingWrapper)`
gap: 10px;
`;

const MarketingText = styled(CheckText)`
font-size: 18px;
`;

const SignupComplete = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
justify-content: center;   
gap: 30px;
`;

const SignupCompleteImg = styled.p`
width: 40px;
height: 40px;
background-image: url(${CircleCheckBoxImgGreen});
background-repeat: no-repeat;
background-size: cover;
`;

const SignupCompleteText = `오마이뱅스 회원가입이\n완료되었습니다.`;

const SignupCompleteSubTitles = styled(SignupComplete)`
gap: 0;
`;

const SignupCompleteSubTitle = styled.span`
white-space: pre-line;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 100%;
text-align: center;
letter-spacing: -0.25px;
color: #666666;
`;

const SignupCompleteDarkSubTitle = styled(SignupCompleteSubTitle)`
text-decoration-line: underline;
color: #222222;
`;

function Signup() {
  const [Step, setStep] = useState(0);
  // const [AgreementCheck, setAgreementCheck] = useState(false); step2 체크박스
  const Steps = () => {
    if(Step === 0) {
      return(
        <SignupNoScroll>
          <SignupWrapper>
            <SignupTextWrapper>
              <SignupText>회원가입</SignupText>
              <TitleWrapper>
                <Title><TitleGreen onClick={GoToHome}>오마이뱅스</TitleGreen>에 오신걸 환영합니다!</Title>
                <SubTitle>{SubTitleText[0]}</SubTitle>
              </TitleWrapper>
            </SignupTextWrapper>
            <SignupButton onClick={() => setStep(1)}>회원가입</SignupButton>
            <AnotherSignup>
              <AnotherSignupText>간편하게 시작하기</AnotherSignupText>
              <AnotherSignupButton>
                <SignupNaver/>
                <SignupKakao/>
                <SignupApple/>
              </AnotherSignupButton>
            </AnotherSignup>
          </SignupWrapper>
        </SignupNoScroll>
      )
    } else if(Step === 1) {
      return(
        <SignupNoScroll>
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
                <SignupWhiteButton onClick={() => setStep(2)}>휴대폰 인증<Arrow/></SignupWhiteButton>
                <SignupWhiteButton>아이핀(I-PIN) 인증<Arrow/></SignupWhiteButton>
              </SignupWhiteButtons>
              <SignupLists>
                <SignupList>{SignupListText[0]}</SignupList>
                <SignupList>{SignupListText[1]}</SignupList>
                <SignupList>{SignupListText[2]}</SignupList>
              </SignupLists>
            </Certification>
          </SignupWrapper>
        </SignupNoScroll>
      )
    } else if(Step === 2) {
      return(
        <SignupNoScroll>
          <SignupWrapper>
            <SignupTitleWrapper>
              <SignupTexts>
                <SignupStepText>STEP 2</SignupStepText>
                <SignupTitle>약관동의</SignupTitle>
                <SignupSubTitle>{SignupSubTitleText[0]}</SignupSubTitle>
              </SignupTexts>
              <SignupStep>
                <SignupStepButton/>
                <SignupStepNumber>2</SignupStepNumber>
                <SignupStepButton/>
                <SignupStepButton/>
              </SignupStep>
            </SignupTitleWrapper>
            <Agreement>
              <SignupWhiteButton>전체 동의<CircleCheckBox type='checkbox'/></SignupWhiteButton>
              <AgreementLists>
                <AgreementList>이용약관(필수)<CircleCheckBox type='checkbox'/></AgreementList>
                <AgreementList>개인정보 수집 및 이용 동의(필수)<CircleCheckBox type='checkbox'/></AgreementList>
                <AgreementList>금융정보 수집 및 이용(필수)<CircleCheckBox type='checkbox'/></AgreementList>
                <AgreementList>미 이용기간 연장(필수)<CircleCheckBox type='checkbox'/></AgreementList>
              </AgreementLists>
              <SignupButton onClick={() => setStep(3)}>동의</SignupButton>
            </Agreement>
          </SignupWrapper>
        </SignupNoScroll>
      )
    } else if(Step === 3) {
      return(
        <SignupScroll>
          <SignupWrapper>
            <SignupTitleWrapper>
              <SignupTexts>
                <SignupStepText>STEP 3</SignupStepText>
                <SignupTitle>정보입력</SignupTitle>
              </SignupTexts>
              <SignupStep>
                <SignupStepButton/>
                <SignupStepButton/>
                <SignupStepNumber>3</SignupStepNumber>
                <SignupStepButton/>
              </SignupStep>
            </SignupTitleWrapper>
            <Information>
              <InformationWrapper>
                <InformationTitle>회원정보</InformationTitle>
                <Profile>
                  <ProfileWrapper>
                    <ProfileTitle>이름</ProfileTitle>
                    <ProfileContent>홍길동</ProfileContent>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <ProfileTitle>생년월일</ProfileTitle>
                    <ProfileContent>0000년 00월 00일</ProfileContent>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <ProfileTitle>휴대폰 번호</ProfileTitle>
                    <ProfileContent>010-0000-0000</ProfileContent>
                  </ProfileWrapper>
                </Profile>
              </InformationWrapper>
              <InformationWrapper>
                <InformationTitle>아이디</InformationTitle>
                <InformationContents>
                  <InformationContent
                  value={ID || ''} onChange={onIDHandler}
                  placeholder='아이디' type='text'/>
                  <CheckBoxs>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>6~12자의 영문 or 숫자</CheckText>
                    </CheckBoxWrapper>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>아이디 중복 확인</CheckText>
                    </CheckBoxWrapper>
                  </CheckBoxs>
                </InformationContents>
              </InformationWrapper>
              <InformationWrapper>
                <InformationTitle>비밀번호</InformationTitle>
                <InformationContents>
                  <InformationContent
                  value={Password || ''} onChange={onPasswordHandler}
                  placeholder='비밀번호' type='password'/>
                  <CheckBoxs>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>영문 포함</CheckText>
                    </CheckBoxWrapper>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>숫자 포함</CheckText>
                    </CheckBoxWrapper>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>특수문자 포함</CheckText>
                    </CheckBoxWrapper>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>8~20자 이내</CheckText>
                    </CheckBoxWrapper>
                  </CheckBoxs>
                </InformationContents>
                <InformationContents>
                  <InformationContent
                  value={CheckPassword || ''} onChange={onCheckPasswordHandler}
                  placeholder='비밀번호 확인' type='password'/>
                  <CheckBoxs>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>동일한 비밀번호를 입력해주세요.</CheckText>
                    </CheckBoxWrapper>
                  </CheckBoxs>
                </InformationContents>
              </InformationWrapper>
              <InformationWrapper>
                <InformationTitle>이메일</InformationTitle>
                <InformationContents>
                  <InformationContent
                  value={Email || ''} onChange={onEmailHandler}
                  placeholder='이메일' type='email'/>
                  <CheckBoxs>
                    <CheckBoxWrapper>
                      <DefaultCheckBox type='checkbox'/>
                      <CheckText>이메일을 입력해주세요.</CheckText>
                    </CheckBoxWrapper>
                  </CheckBoxs>
                </InformationContents>
              </InformationWrapper>
              <InformationWrapper>
                <InformationTitle>마케팅 정보 수신 동의</InformationTitle>
                <InformationSubTitle>{InformationSubTitleText}</InformationSubTitle>
                <MarketingWrapper>
                  <Marketing>
                    <CircleCheckBox type='checkbox'/>
                    <MarketingText>전체동의</MarketingText>
                  </Marketing>
                  <Marketing>
                    <CircleCheckBox type='checkbox'/>
                    <MarketingText>이메일</MarketingText>
                  </Marketing>
                  <Marketing>
                    <CircleCheckBox type='checkbox'/>
                    <MarketingText>SMS</MarketingText>
                  </Marketing>
                </MarketingWrapper>
              </InformationWrapper>
            <SignupButton onClick={() => console.log('id,passwrod,checkpassword,email', ID, Password, CheckPassword, Email)}>회원가입</SignupButton>
            </Information>
          </SignupWrapper>
        </SignupScroll>
      )
    } else if(Step === 4) {
      return (
        <SignupNoScroll>
          <SignupWrapper>
            <SignupTitleWrapper>
              <SignupTexts>
                <SignupStepText>STEP 4</SignupStepText>
                <SignupTitle>회원가입 완료</SignupTitle>
              </SignupTexts>
              <SignupStep>
                <SignupStepButton/>
                <SignupStepButton/>
                <SignupStepButton/>
                <SignupStepNumber>4</SignupStepNumber>
              </SignupStep>
            </SignupTitleWrapper>
            <SignupComplete>
              <SignupCompleteImg/>
              <TitleGreen>{SignupCompleteText}</TitleGreen>
              <SignupCompleteSubTitles>
                <SignupCompleteSubTitle>오마이뱅스의 회원이 되신 것을 환영합니다.</SignupCompleteSubTitle>
                <SignupCompleteSubTitle><SignupCompleteDarkSubTitle>로그인 후 </SignupCompleteDarkSubTitle>나만의 가계부를 만들어보세요.</SignupCompleteSubTitle>
              </SignupCompleteSubTitles>
            </SignupComplete>
            <SignupButton onClick={() => GoToLogin()}>로그인 하러가기</SignupButton>
          </SignupWrapper>
        </SignupNoScroll>
      )
    }
  }

  const GoToLogin = () => {
    window.location.replace('/login');
  }

  const GoToHome = () => {
    window.location.replace('/');
  }

  const [ID, setID] = useState('');
  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }
  const [Password, setPassword] = useState('');
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const [CheckPassword, setCheckPassword] = useState('');
  const onCheckPasswordHandler = (event) => {
    setCheckPassword(event.currentTarget.value);
  }
  const [Email, setEmail] = useState('');
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const [IDCondition, setIDCondition] = useState('');

  return(
    <App>
      <Blur>
        {Steps()}
      </Blur>
    </App>
  );
}

export default Signup;