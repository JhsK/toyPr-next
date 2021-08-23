import React from 'react';
import Slider from 'react-slick';
import { createGlobalStyle } from 'styled-components';

import BannerOne from '../../../public/main_v_2_bu.jpg';
import BannerTwo from '../../../public/main_v_3_bu.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Global = createGlobalStyle`
    .slick-dots {
        bottom: 5px;
    }
`;

interface SliderOption {
  dots: boolean;
  fade: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

const Slick = () => {
  const setting: SliderOption = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Global />
      <Slider {...setting}>
        <div style={{ width: '100%' }}>
          <img src={BannerOne.src} />
        </div>
        <div style={{ width: '100%' }}>
          <img src={BannerTwo.src} />
        </div>
      </Slider>
    </>
  );
};

export default Slick;
