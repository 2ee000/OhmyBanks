import React from 'react';
import styled from 'styled-components';

import background from '../assets/background.png';
import CheckBoxImgGray from '../assets/checkbox_gray.png';
import CheckBoxImgGreen from '../assets/checkbox_green.png';
import LoginNaverImg from '../assets/login_naver.png';
import LoginKakaoImg from '../assets/login_kakao.png';
import LoginAppleImg from '../assets/login_apple.png';


function Login() {
  const GoToSignup = () => {
    window.location.replace('/signup');
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

  const Login = styled.div`
    width: 1245px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #FFFFFF;
  `;

  const LoginWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    text-align: start;
    justify-content: center;
    gap: 80px;
  `;

  const Title = styled.span`
    white-space: pre-line;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #000000;
  `;

  const TitleGreen = styled(Title)`
    font-weight: 700;
    color: #12B679;
  `;

  const LoginTitle = {
    0: `\n오마이뱅스`,
  }

  const LoginForm = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 50px;
  `;

  const Text = styled(Title)`
    align-self: flex-start;
    font-weight: 700;
    font-size: 26px;
  `;

  const InputWrapper = styled(LoginForm)`
    gap: 10px;
  `;

  const Input = styled.input`
    padding: 24px 40px;
    gap: 10px;
    width: 670px;
    height: 66px;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.25px;
    color: #222222;
    &::placeholder {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.25px;
      color: #888888;
    }
  `;

  const SaveID = styled.label`
    cursor: pointer;
    align-self: flex-start;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 8px;
    margin-top: 6px;
  `;

  const CheckBox = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    background-image: url(${CheckBoxImgGray});
    background-repeat: no-repeat;
    background-size: cover;
    &:checked {
      background-image: url(${CheckBoxImgGreen});
    }
  `;

  const SaveIDText = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.25px;
  `;

  const LoginButtons = styled(LoginForm)`
    gap: 10px;
  `;

  const LoginButton = styled.button`
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
    text-align: center;
    letter-spacing: -0.25px;
    color: #FFFFFF;
  `;

  const SignupButton = styled(LoginButton)`
    background: #FFFFFF;
    border: 1px solid #222222;
    color: #222222;    
  `;

  const Search = styled(LoginForm)`
    flex-flow: row nowrap;
    gap: 20px;
    margin-top: 10px;
  `;

  const SearchText = styled.a`
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;  
    text-align: center;
    letter-spacing: -0.25px;
    color: #888888;  
  `;

  const SearchBar = styled.p`
    width: 1px;
    height: 14px;
    background: #DDDDDD;
  `;

  const AnotherLogin = styled(LoginForm)`
    gap: 30px;
  `;

  const AnotherLoginText = styled.p`
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
      width: 308px;
      height: 1px;
    }
    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  `;

  const AnotherLoginButton = styled(AnotherLogin)`
    flex-flow: row nowrap;
  `;

  const LoginNaver = styled.button`
    width: 60px;
    height: 60px;
    background-image: url(${LoginNaverImg});
  `;

  const LoginKakao = styled(LoginNaver)`
    background-image: url(${LoginKakaoImg});  
  `;

  const LoginApple = styled(LoginNaver)`
    background-image: url(${LoginAppleImg});  
  `;

  return(
    <App>
      <Blur>
        <Login>
          <LoginWrapper>
            <Title>어서오세요!<TitleGreen>{LoginTitle[0]}</TitleGreen>에 오신걸 환영합니다.</Title>
            <LoginForm>
              <Text>로그인</Text>
              <InputWrapper>
                <Input type='text' placeholder='아이디'/>
                <Input type='password' placeholder='비밀번호 8자 ~ 20자 입력'/>
                <SaveID for='checkbox'>
                  <CheckBox id='checkbox' type='checkbox'/>
                  <SaveIDText>아이디 저장</SaveIDText>
                </SaveID>
              </InputWrapper>
              <LoginButtons>
                <LoginButton>로그인</LoginButton>
                <SignupButton onClick={GoToSignup}>회원가입</SignupButton>
                <Search>
                  <SearchText>아이디 찾기</SearchText>
                  <SearchBar/>
                  <SearchText>비밀번호 찾기</SearchText>
                </Search>
              </LoginButtons>
              <AnotherLogin>
                <AnotherLoginText>또는</AnotherLoginText>
                <AnotherLoginButton>
                  <LoginNaver/>
                  <LoginKakao/>
                  <LoginApple/>
                </AnotherLoginButton>
              </AnotherLogin>
            </LoginForm>
          </LoginWrapper>
        </Login>
      </Blur>
    </App>
  );
}

export default Login;