import ApartmentFeatures from './ApartementFeatures';
import FeaturedSection from './FeaturedSection';
import HeroSection from './HeroSection';
import LocationList from './LocationList';
import LocationSection from './LocationSection';
import Testimonials from './Testimonials';
import CTA from './CTA';

const HomePage = ({ userDetails }) => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <LocationSection />
      <LocationList />
      <ApartmentFeatures />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
