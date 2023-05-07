import React, { useState } from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';

import NaverImg from '../assets/naver.svg';
import KakaoImg from '../assets/kakao.svg';
import AppleImg from '../assets/apple.svg';
import CheckImg from '../assets/check.svg';
import { ReactComponent as ModifyCheckImg } from '../assets/check.svg';
import SignupArrow from '../assets/signup_arrow.png';

const App = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
text-align: center;
justify-content: end;
&::before {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);
  transform: scale(1.025);
  z-index: -1; 
  content: "";
}
`; // transform: scale(1.025); 블러처리된 테두리를 안보이게 하기 위해 확대

const SignupWrapper = styled.div`
width: 1245px;
height: 100vh;
display: flex;
flex-flow: column nowrap;
align-items: center;
text-align: center;
justify-content: center;
background-color: #FFFFFF;
`;

const SignupForm = styled(SignupWrapper)`
width: auto;
height: auto;
gap: 80px;
background-color: none;
`;

const SignupTitles = styled(SignupForm)`
gap: 30px;
`;

const SignupTitle = styled.p`
white-space: pre-line;
display: inline;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 100%;
letter-spacing: -0.25px;
color: #222222;
`;

const SignupTitleText = `오마이뱅스 회원가입이\n완료되었습니다.`;

const SignupSubTitle = styled(SignupTitle)`
white-space: pre-line;
font-weight: 700;
font-size: 18px;
color: #666666;
`;

const SignupSubTitleText = {
  0: `회원가입 후 나만의 소비는 물론 생활패턴까지\n분석하는 나만의 커스텀 가계부 서비스를 경험해보세요.`,
  1: `오마이뱅스 회원이 되신 것을 환영합니다.\n로그인 후나만의 가계부를 만들어보세요.`,
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

const SignupAnother = styled(SignupForm)`
gap: 30px;
`;

const SignupAnotherText = styled.p`
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

const SignupAnotherButtons = styled(SignupAnother)`
flex-flow: row nowrap;
`;

const SignupAnotherButton = styled.button`
width: 60px;
height: 60px;
background-repeat: no-repeat;
background-size: cover;
`;

const SignupStep = styled(SignupForm)`
width: 100%;
gap: 0;
flex-flow: row nowrap;
justify-content: space-between;
`;

const SignupStepText = styled(SignupForm)`
align-items: start;
gap: 40px;
`;

const SignupStepTitleText = styled(SignupStepText)`
gap: 20px;
`;

const SignupStepNumber = styled.p`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.25px;
color: #666666;
`;

const SignupStepTitle = styled.p`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 42px;
line-height: 100%;
letter-spacing: -0.25px;
color: #222222;
`;

const SignupStepSubTitle = styled(SignupStepTitle)`
white-space: pre-line;
text-align: start;
font-weight: 400;
font-size: 16px;
color: #666666;
`;

const SignupStepSubTitleText = {
  1: `오마이뱅스 회원가입을 위한 본인인증 절차입니다.`,
  2: `오마이뱅스 회원이 되시면 여러분의 성향을 분석한 다양한 회원님의\n소비 습관을 확인하실 수 있습니다.`,
}

const SignupStepImg = styled(SignupStep)`
width: auto;
justify-content: center;
gap: 12px;
`;

const SignupStepNumberImg = styled(SignupStepTitle)`
width: 40px;
height: 40px;
border-radius: 100%;
background-color: #12B679;
font-size: 20px;
line-height: 200%;
color: #FFFFFF;
`;

const SingupStepDefaultImg = styled.p`
width: 10px;
height: 10px;
border-radius: 100%;
background-color: #DDDDDD;
`;

const SignupContents = styled(SignupForm)`
gap: 50px;
`;

const SignupBoxs = styled(SignupForm)`
gap: 10px;
`;

const SignupWhiteBox = styled.button`
width: 670px;
height: 108px;
display: inline-flex;
align-items: center;
text-align: center;
justify-content: space-between;
padding: 30px 40px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #DDDDDD;
border-radius: 6px;
`;

const SignupLittleWhiteBox = styled(SignupWhiteBox)`
width: 670px;
height: 48px;
padding: 0px 40px;
border: none;
`;

const SignupWhiteBoxText = styled(SignupStepTitle)`
font-size: 26px;
color: #000000;
`;

const SignupLittleWhiteBoxText = styled(SignupWhiteBoxText)`
font-size: 20px;
text-decoration-line: underline;
`;

const SignupWhiteBoxArrow = styled.p`
width: 48px;
height: 48px;
background-image: url(${SignupArrow});
background-repeat: no-repeat;
background-size: cover;
`;

const SignupExplanations = styled.ul`
display: flex;
flex-flow: column nowrap;
align-items: start;
text-align: start;
justify-content: center;
gap: 20px;
`;

const SignupExplanation = styled.li`
white-space: pre-line;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
letter-spacing: -0.25px;
color: #666666;
`;

const SignupExplanationText = {
  0: `입력하신 정보는 본인확인을 위해 해당 인증기관에서 직접 수집하며,\n본인 확인 용도 외에 사용되거나 저장되지 않습니다.`,
  1: `정보통신망법(2012.08.18 시행) 제 23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을\n제한합니다.`,
  2: `만 14세 미만은 회원가입을 제한합니다.`,
}

const CheckCircle = styled.label`
appearance: none;
width: 40px;
height: 40px;
border-radius: 100%;
`;

const CheckImage = styled.input`
appearance: none;
width: 40px;
height: 40px;
border-radius: 100%;
background-image: url(${CheckImg});
background-repeat: no-repeat;
background-size: 20px 14px;
background-position: center;
background-color: #DDDDDD;
&:checked {
  background-color: #12B679;
}
`;

const SignupContent = styled(SignupForm)`
align-items: start;
gap: 20px;
`;

const SignupContentTitle = styled(SignupStepNumber)`
  color: #222222;
`;

const SignupContentSubTitle = styled(SignupContentTitle)`
white-space: pre-line;
width: 670px;
text-align: start;
font-weight: 400;
font-size: 18px;
color: #888888;
`;

const SignupContentSubTitleText = `오마이뱅스에서 제공되는 서비스에 대한 수신동의 여부를 선택해 주세요.\n(단, 회원가입 / 서비스 홍보 / 주요정책 관련 정보는 수신 동의와 관계없이 발송 됩니다.)`;

const SignupContentBox = styled(SignupForm)`
align-items: start;
gap: 16px;
`;

const SignupContentTextWrapper = styled(SignupForm)`
flex-flow: row nowrap;
align-items: start;
background: none;
gap: 0;
`;

const SignupContentText = styled(SignupStepTitle)`
text-align: start;
font-size: 18px;
color: #666666;
`;

const SignupInput = styled.input`
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
&:focus {
  outline: none;
}
`;

const SignupConditions = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 20px;
`;

const SignupCondition = styled(SignupConditions)`
gap: 8px;
`;

const SignupConditionCheck = styled(ModifyCheckImg)`
path{
  stroke: #888888;
}
width: 16px;
height: 16px;
`;

const SignupConditionText = styled.p`
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

const Marketing = styled.label`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
gap: 10px;
`;

const MarketingText = styled(SignupConditionText)`
font-size: 18px;
`;

function Test() {
  const [Step, setStep] = useState(0);
  const ChangeStep = () => {
    if(Step === 0) {
      return(
        <SignupWrapper>
          <SignupForm>
            <SignupStepTitle>회원가입</SignupStepTitle>
            <SignupTitles>
              <SignupTitle><SignupTitle style={{color: '#12B679'}}>오마이뱅스</SignupTitle>에 오신걸 환영합니다!</SignupTitle>
              <SignupSubTitle>{SignupSubTitleText[0]}</SignupSubTitle>
            </SignupTitles>
            <SignupButton onClick={() => setStep(1)}>회원가입</SignupButton>
            <SignupAnother>
              <SignupAnotherText>간편하게 시작하기</SignupAnotherText>
              <SignupAnotherButtons>
                <SignupAnotherButton style={{backgroundImage: `url(${NaverImg})`}}/>
                <SignupAnotherButton style={{backgroundImage: `url(${KakaoImg})`}}/>
                <SignupAnotherButton style={{backgroundImage: `url(${AppleImg})`}}/>
              </SignupAnotherButtons>
            </SignupAnother>
          </SignupForm>
        </SignupWrapper>
      )
    } else if(Step === 1) { // step1 본인인증
      return(
        <SignupWrapper>
          <SignupForm>
            <SignupStep>
              <SignupStepText>
                <SignupStepTitleText>
                  <SignupStepNumber>STEP 1</SignupStepNumber>
                  <SignupStepTitle>본인인증</SignupStepTitle>
                </SignupStepTitleText>
                <SignupStepSubTitle>{SignupStepSubTitleText[1]}</SignupStepSubTitle>
              </SignupStepText>
              <SignupStepImg>
                <SignupStepNumberImg>1</SignupStepNumberImg>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
              </SignupStepImg>
            </SignupStep>
            <SignupContents>
              <SignupBoxs>
                <SignupWhiteBox onClick={() => setStep(2)}>
                  <SignupWhiteBoxText>휴대폰 인증</SignupWhiteBoxText>
                  <SignupWhiteBoxArrow/>
                </SignupWhiteBox>
                <SignupWhiteBox>
                  <SignupWhiteBoxText>아이핀(I-PIN) 인증</SignupWhiteBoxText>
                  <SignupWhiteBoxArrow/>
                </SignupWhiteBox>
              </SignupBoxs>
              <SignupExplanations>
                <SignupExplanation>{SignupExplanationText[0]}</SignupExplanation>
                <SignupExplanation>{SignupExplanationText[1]}</SignupExplanation>
                <SignupExplanation>{SignupExplanationText[2]}</SignupExplanation>
              </SignupExplanations>
            </SignupContents>
          </SignupForm>
        </SignupWrapper>
      )
    } else if(Step === 2) { // step2 약관동의
      return(
        <SignupWrapper>
          <SignupForm>
            <SignupStep>
              <SignupStepText>
                <SignupStepTitleText>
                  <SignupStepNumber>STEP 2</SignupStepNumber>
                  <SignupStepTitle>약관동의</SignupStepTitle>
                </SignupStepTitleText>
                <SignupStepSubTitle>{SignupStepSubTitleText[2]}</SignupStepSubTitle>
              </SignupStepText>
              <SignupStepImg>
                <SingupStepDefaultImg/>
                <SignupStepNumberImg>2</SignupStepNumberImg>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
              </SignupStepImg>
            </SignupStep>
            <SignupContents>
              <SignupWhiteBox as="label">
                <SignupWhiteBoxText>전체동의</SignupWhiteBoxText>
                <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
              </SignupWhiteBox>
              <SignupBoxs>
                <SignupLittleWhiteBox as="label">
                  <SignupLittleWhiteBoxText>이용약관(필수)</SignupLittleWhiteBoxText>
                <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                </SignupLittleWhiteBox>
                <SignupLittleWhiteBox as="label">
                  <SignupLittleWhiteBoxText>개인정보 수집 및 이용 동의(필수)</SignupLittleWhiteBoxText>
                <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                </SignupLittleWhiteBox>
                <SignupLittleWhiteBox as="label">
                  <SignupLittleWhiteBoxText>금융정보 수집 및 이용(필수)</SignupLittleWhiteBoxText>
                <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                </SignupLittleWhiteBox>
                <SignupLittleWhiteBox as="label">
                  <SignupLittleWhiteBoxText>미이용기간 연장(필수)</SignupLittleWhiteBoxText>
                <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                </SignupLittleWhiteBox>
              </SignupBoxs>
              <SignupButton onClick={() => setStep(3)}>동의</SignupButton>
            </SignupContents>
          </SignupForm>
        </SignupWrapper>
      )
    } else if(Step === 3) { // step3 정보입력
      return(
        <SignupWrapper>
          <SignupForm>
            <SignupStep>
              <SignupStepText>
                <SignupStepTitleText>
                  <SignupStepNumber>STEP 3</SignupStepNumber>
                  <SignupStepTitle>정보입력</SignupStepTitle>
                </SignupStepTitleText>
              </SignupStepText>
              <SignupStepImg>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
                <SignupStepNumberImg>3</SignupStepNumberImg>
                <SingupStepDefaultImg/>
              </SignupStepImg>
            </SignupStep>
            <SignupContents>
              <SignupContent>
                <SignupContentTitle>회원정보</SignupContentTitle>
                <SignupContentBox style={{width: '670px',backgroundColor: '#F5F5F5', padding: '30px'}}>
                  <SignupContentTextWrapper>
                    <SignupContentText style={{width: '130px'}}>이름</SignupContentText>
                    <SignupContentText style={{color: '#222222'}}>홍길동</SignupContentText>
                  </SignupContentTextWrapper>
                  <SignupContentTextWrapper>
                    <SignupContentText style={{width: '130px'}}>생년월일</SignupContentText>
                    <SignupContentText style={{color: '#222222'}}>0000년 00월 00일</SignupContentText>
                  </SignupContentTextWrapper>
                  <SignupContentTextWrapper>
                    <SignupContentText style={{width: '130px'}}>휴대폰 번호</SignupContentText>
                    <SignupContentText style={{color: '#222222'}}>010-0000-0000</SignupContentText>
                  </SignupContentTextWrapper>
                </SignupContentBox>
              </SignupContent>
              <SignupContent>
                <SignupContentTitle>아이디</SignupContentTitle>
                <SignupContentBox>
                  <SignupInput value={ID} onChange={onIDHandler} placeholder='아이디' type='text'/>
                  <SignupConditions>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>6~12자의 영문 or 숫자</SignupConditionText>
                    </SignupCondition>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>아이디 중복 확인</SignupConditionText>
                    </SignupCondition>
                  </SignupConditions>
                </SignupContentBox>
                </SignupContent>
              <SignupContent>
                <SignupContentTitle>비밀번호</SignupContentTitle>
                <SignupContentBox>
                  <SignupInput value={Password} onChange={onPasswordHandler} placeholder='비밀번호' type='password'/>
                  <SignupConditions>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>영문 포함</SignupConditionText>
                    </SignupCondition>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>숫자 포함</SignupConditionText>
                    </SignupCondition>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>특수문자 포함</SignupConditionText>
                    </SignupCondition>
                    <SignupCondition>
                      <SignupConditionCheck/>
                      <SignupConditionText>8~20자 이내</SignupConditionText>
                    </SignupCondition>
                  </SignupConditions>
                </SignupContentBox>
                <SignupContentBox>
                  <SignupInput value={CheckPassword} onChange={onCheckPasswordHandler} placeholder='비밀번호 확인' type='password'/>
                  <SignupCondition>
                    <SignupConditionCheck/>
                    <SignupConditionText>동일한 비밀번호를 입력해주세요.</SignupConditionText>
                  </SignupCondition>
                </SignupContentBox>
              </SignupContent>
              <SignupContent>
                <SignupContentTitle>이메일</SignupContentTitle>
                <SignupContentBox>
                  <SignupInput value={Email} onChange={onEmailHandler} placeholder='이메일' type='email'/>
                  <SignupCondition>
                    <SignupConditionCheck/>
                    <SignupConditionText>이메일을 입력해주세요.</SignupConditionText>
                  </SignupCondition>
                </SignupContentBox>
              </SignupContent>
              <SignupContent>
                <SignupContentTitle>마케팅 정보 수신 동의</SignupContentTitle>
                <SignupContentSubTitle>{SignupContentSubTitleText}</SignupContentSubTitle>
                <MarketingWrapper>
                  <Marketing>
                    <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                    <MarketingText>전체동의</MarketingText>
                  </Marketing>
                  <Marketing>
                    <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                    <MarketingText>이메일</MarketingText>
                  </Marketing>
                  <Marketing>
                    <CheckCircle><CheckImage type='checkbox'/></CheckCircle>
                    <MarketingText>SMS</MarketingText>
                  </Marketing>
                </MarketingWrapper>
              </SignupContent>
              <SignupButton onClick={() => setStep(4)}>회원가입</SignupButton>
            </SignupContents>
          </SignupForm>
        </SignupWrapper>
      )
    } else if(Step === 4) { // step4 회원가입 완료
      return(
        <SignupWrapper>
          <SignupForm>
            <SignupStep>
              <SignupStepText>
                <SignupStepTitleText>
                  <SignupStepNumber>STEP 4</SignupStepNumber>
                  <SignupStepTitle>회원가입 완료</SignupStepTitle>
                </SignupStepTitleText>
              </SignupStepText>
              <SignupStepImg>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
                <SingupStepDefaultImg/>
                <SignupStepNumberImg>4</SignupStepNumberImg>
              </SignupStepImg>
            </SignupStep>
            <SignupTitles>
              <CheckCircle><CheckImage as="p" style={{backgroundColor: '#12B679'}}/></CheckCircle>
              <SignupTitle style={{fontWeight: 700,color: '#12B679'}}>{SignupTitleText}</SignupTitle>
              <SignupSubTitle style={{fontWeight: 500}}>{SignupSubTitleText[1]}</SignupSubTitle>
            </SignupTitles>
            <SignupContents>
              <SignupButton onClick={() => setStep(0)}>로그인 하러가기</SignupButton>
            </SignupContents>
          </SignupForm>
        </SignupWrapper>
      )
    }
  }

  const [ID, setID] = useState('');
  const [Password, setPassword] = useState('');
  const [CheckPassword, setCheckPassword] = useState('');
  const [Email, setEmail] = useState('');
  const onIDHandler = (event) => { // 한박자 느리게 작동
    setID(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => { 
    setPassword(event.currentTarget.value);
  }
  const onCheckPasswordHandler = (event) => { 
    setCheckPassword(event.currentTarget.value);
  }
  const onEmailHandler = (event) => { 
    setEmail(event.currentTarget.value);
  }

  return(
    <App>
      {ChangeStep()}
    </App>
  );
}

export default Test;