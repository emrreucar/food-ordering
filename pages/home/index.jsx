import React from 'react';
import HeroContent from '../../components/HeroContent';
import ImageSlider from '../../components/ImageSlider';
import Campaigns from '../../components/Campaigns';
import MenuWrapper from '../../components/product/MenuWrapper';
import About from '@/components/ui/About';
import Reservation from '@/components/Reservation';

const HomePage = () => {
  return (
    <div>
        <HeroContent />
        <ImageSlider />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Reservation />
    </div>
  )
}

export default HomePage