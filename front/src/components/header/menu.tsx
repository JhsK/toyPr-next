import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Logo from '../../../public/logo_b.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  width: 20%;
  justify-content: space-around;
`;

const Menu: React.FunctionComponent = () => {
  return (
    <>
      <HeaderContainer>
        <img src={Logo.src} />
        <MenuList>
          <Link href="/intro">
            <a>
              <li>소개</li>
            </a>
          </Link>
          <Link href="/intro">
            <a>
              <li>목록</li>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <li>로그인</li>
            </a>
          </Link>
          <Link href="/intro">
            <a>
              <li>FAQ</li>
            </a>
          </Link>
        </MenuList>
      </HeaderContainer>
    </>
  );
};

export default Menu;
