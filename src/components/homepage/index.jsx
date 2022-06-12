import styledComponents from 'styled-components';
import StorePage from '../store';
import Card from './Card';
import FeaturedSection from './Featured';
import HeroSection from './Herosection';
const HomeWrapper = styledComponents.div``;
const Homepage = () => {
  return (
    <HomeWrapper>
      <HeroSection />
      <FeaturedSection />
      <StorePage />
    </HomeWrapper>
  );
};

export default Homepage;
