import React, { useState, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

import Logo from '../../../public/logo_b.png';
import { colorTheme } from '../../theme';
import { AiOutlineUser } from 'react-icons/ai';
import { IoKeyOutline } from 'react-icons/io5';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  width: 300px;

  .fontContainer {
    text-align: center;
  }
  .fontGray {
    color: ${colorTheme.FONT_GRAY};
    margin-right: 1rem;
  }
  .fontBlue {
    color: ${colorTheme.MID_BLUE};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  & > div {
    position: relative;
  }

  .inputIconUser {
    position: absolute;
    top: 10px;
    left: 15px;
  }

  .inputIconPw {
    position: absolute;
    bottom: 26px;
    left: 15px;
  }
`;

const Input = styled.input<{ exColor: boolean }>`
  width: 100%;
  border: 1px solid ${colorTheme.BORDER_GRAY};
  border-radius: 30px;
  height: 40px;
  margin-bottom: 1rem;
  outline: none;
  padding-left: 2.2rem;

  &:focus {
    border: 1px solid
      ${props => (props.exColor ? colorTheme.MID_BLUE : colorTheme.BORDER_RED)};
  }
`;

const Button = styled.button`
  border-radius: 30px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${colorTheme.BTN_NAVY};
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Global = createGlobalStyle`
  a {
        color: ${colorTheme.BTN_NAVY};
      }
`;

const Login = () => {
  const [userInpput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [userEx, setUserEx] = useState(false);
  const [pwEx, setPwEx] = useState(false);

  const Regex = /^[a-zA-Z][a-zA-Z0-9]+@bu.ac.kr/;

  const onChangeUser = useCallback(
    e => {
      e.preventDefault();
      setUserInput(e.target.value);

      if (Regex.test(userInpput)) setUserEx(true);
    },
    [userInpput]
  );

  const onChangePw = useCallback(e => {
    e.preventDefault();
    setPassword(e.target.value);
  }, []);

  return (
    <LoginContainer>
      <Global />
      <div>
        <img src={Logo.src} alt="logo" />
      </div>
      <Form>
        <div>
          <Input
            type="text"
            value={userInpput}
            onChange={onChangeUser}
            required
            exColor={userEx}
          />
          <Input
            type="password"
            value={password}
            onChange={onChangePw}
            required
            exColor={pwEx}
          />
          <AiOutlineUser className="inputIconUser" />
          <IoKeyOutline className="inputIconPw" />
        </div>
        <Button type="submit">로그인</Button>
      </Form>
      <div className="fontContainer">
        <span className="fontGray">계정이 없다면 생성해주세요</span>
        <span className="fontBlue">
          <Link href="/join">
            <a>회원가입</a>
          </Link>
        </span>
      </div>
    </LoginContainer>
  );
};

export default Login;
