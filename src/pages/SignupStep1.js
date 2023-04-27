import React from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import CertificationArrowImg from '../assets/certification_arrow.png';


function SignupStep1() {
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
    font-weight: 400;
    font-size: 16px;
    color: #666666;  
  `;

  const Certification = styled(SignupWrapper)`
    gap: 50px;
  `;

  const CertificationButtons = styled(SignupWrapper)`
    gap: 10px;
  `;

  const CertificationButton = styled.button`
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

  const CertificationArrow = styled.p`
    width: 48px;
    height: 48px;
    background-image: url(${CertificationArrowImg});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const CertificationLists = styled(SignupWrapper)`
    align-items: start;
    text-align: start;
    gap: 20px;
  `;

  const CertificationList = styled.li`
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

  const CertificationListText = {
    0: `입력하신 정보는 본인확인을 위해 해당 인증기관에서 직접 수집하며,\n본인 확인 용도 외에 사용되거나 저장되지 않습니다.`,
    1: `정보통신망법(2012.08.18 시행) 제 23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을\n제한합니다.`,
    2: `만 14세 미만은 회원가입을 제한합니다.`,
  }

  return(
    <App>
      <Blur>
        <Signup>
          <SignupWrapper>
            <SignupTitleWrapper>
              <SignupText>
                <SignupStepText>STEP 1</SignupStepText>
                <SignupTitle>본인인증</SignupTitle>
                <SignupSubTitle>오마이뱅스 회원가입을 위한 본인인증 절차입니다.</SignupSubTitle>
              </SignupText>
              <SignupStep>
                <SignupStepNumber>1</SignupStepNumber>
                <SignupStepButton/>
                <SignupStepButton/>
                <SignupStepButton/>
              </SignupStep>
            </SignupTitleWrapper>
            <Certification>
              <CertificationButtons>
                <CertificationButton>휴대폰 인증<CertificationArrow/></CertificationButton>
                <CertificationButton>아이핀(I-PIN) 인증<CertificationArrow/></CertificationButton>
              </CertificationButtons>
              <CertificationLists>
                <CertificationList>{CertificationListText[0]}</CertificationList>
                <CertificationList>{CertificationListText[1]}</CertificationList>
                <CertificationList>{CertificationListText[2]}</CertificationList>
              </CertificationLists>
            </Certification>
          </SignupWrapper>
        </Signup>
      </Blur>
    </App>
  );
}

export default SignupStep1;