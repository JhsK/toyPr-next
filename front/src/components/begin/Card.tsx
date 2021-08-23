import React from 'react';
import styled from 'styled-components';
import { colorTheme } from '../../theme';

import CardBg from '../../../public/main_v_3_bu_final.jpg';

const Continaer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 1rem 0;
`;

const CardContainer = styled.div`
  width: 1250px;
  height: 550px;
  border: 1px solid #d9d9d9;
  text-align: center;

  .cardBg {
    height: 75%;
    position: relative;
    text-align: center;
  }

  .cardBg::before {
    content: '';
    opacity: 0.2;
    background-image: url(${CardBg.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .cardFontTop {
    padding: 2rem 0 3rem 0;
    line-height: 2.3rem;

    .fontDarkBlue {
      color: ${colorTheme.DARK_BLUE};
      font-size: 1.7rem;
      font-weight: bold;
    }
    .font {
      font-size: 1.7rem;
    }
    .fontLarge {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .cardFontBottom {
    padding: 4rem 0 0 0;
    line-height: 2rem;

    .font {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .fontDarkBlue {
      color: ${colorTheme.DARK_BLUE};
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  font-size: 1rem;
  margin: 2.5rem 0.5rem 0 0.5rem;
  cursor: pointer;

  background-color: ${props => props.color};
  color: #fff;
`;

const Card = () => {
  return (
    <>
      <Continaer>
        <CardContainer>
          <div className="cardBg">
            <div className="cardFontTop">
              <span className="fontDarkBlue">청와대의 직접 소통</span>
              <span className="font">은</span>
              <br />
              <span className="fontLarge">
                &apos;국민이 물으면 정부가 답한다&apos;는 철학을 지향합니다.
              </span>
            </div>
            <div className="cardFontBottom">
              <span className="font">
                국정 현안 관련, 국민들 다수의 목소리가 모여
              </span>
              <br />
              <span className="font">
                30일 동안 20만 이상 추천 청원에 대해서는
              </span>
              <br />
              <span className="fontDarkBlue">
                정부 및 청와대 책임자(각 부처 및 기관의 장, 대통령 수석·비서관,
                보좌관 등)
              </span>
              <span className="font">가 답하겠습니다.</span>
            </div>
          </div>
          <Button color={colorTheme.BTN_NAVY}>지금 청원하기</Button>
          <Button color={colorTheme.MID_BLUE}>내 청원 보기</Button>
        </CardContainer>
      </Continaer>
    </>
  );
};

export default Card;
