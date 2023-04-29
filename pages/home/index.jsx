import React from 'react';
import HeroContent from '../../components/HeroContent';
import ImageSlider from '../../components/ImageSlider';
import Campaigns from '../../components/Campaigns';
import MenuWrapper from '../../components/product/MenuWrapper';

const HomePage = () => {
  return (
    <div>
        <HeroContent />
        <ImageSlider />
        <Campaigns />
        <MenuWrapper />
    </div>
  )
}

export default HomePage