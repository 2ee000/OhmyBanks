import React from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import CheckBoxImgGray from '../assets/checkbox_gray.png';
import CheckBoxImgGreen from '../assets/checkbox_green.png';


function SignupStep2() {
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
    gap: 100px;
  `;

  const SignupTitleWrapper = styled(SignupWrapper)`
    width: 670px;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 0px;
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

  const SignupText = styled(SignupWrapper)`
    align-items: start;
    gap: 20px;
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
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    color: #666666;  
  `;

  const SignupSubTitleText = {
    0: `오마이뱅스 회원이 되시면 여러분의 성향을 분석한 다양한 회원님의\n소비 습관을 확인하실 수 있습니다.`,
  }

  const Agreement = styled(SignupWrapper)`
    gap: 50px;
  `;

  const SignupWhiteButton = styled.label`
    cursor: pointer;
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

  const CheckBox = styled.input`
    appearance: none;
    width: 40px;
    height: 40px;
    background-image: url(${CheckBoxImgGray});
    background-repeat: no-repeat;
    background-size: cover;
    &:checked {
      background-image: url(${CheckBoxImgGreen});
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

  const AgreementButton = styled.button`
    width: 670px;
    height: 66px;
    padding: 24px 130px;
    background: #DDDDDD;
    border-radius: 6px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #FFFFFF;
  `;

  return(
    <App>
      <Blur>
        <Signup>
          <SignupWrapper>
            <SignupTitleWrapper>
              <SignupText>
                <SignupStepText>STEP 2</SignupStepText>
                <SignupTitle>약관동의</SignupTitle>
                <SignupSubTitle>{SignupSubTitleText[0]}</SignupSubTitle>
              </SignupText>
              <SignupStep>
                <SignupStepButton/>
                <SignupStepNumber>2</SignupStepNumber>
                <SignupStepButton/>
                <SignupStepButton/>
              </SignupStep>
            </SignupTitleWrapper>
            <Agreement>
              <SignupWhiteButton>전체 동의<CheckBox type='checkbox'/></SignupWhiteButton>
              <AgreementLists>
                <AgreementList>이용약관(필수)<CheckBox type='checkbox'/></AgreementList>
                <AgreementList>개인정보 수집 및 이용 동의(필수)<CheckBox type='checkbox'/></AgreementList>
                <AgreementList>금융정보 수집 및 이용(필수)<CheckBox type='checkbox'/></AgreementList>
                <AgreementList>미 이용기간 연장(필수)<CheckBox type='checkbox'/></AgreementList>
              </AgreementLists>
              <AgreementButton>동의</AgreementButton>
            </Agreement>
          </SignupWrapper>
        </Signup>
      </Blur>
    </App>
  );
}

export default SignupStep2;