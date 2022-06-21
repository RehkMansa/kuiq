import ApartmentFeatures from './ApartementFeatures';
import FeaturedSection from './FeaturedSection';
import HeroSection from './HeroSection';
import LocationList from './LocationList';
import LocationSection from './LocationSection';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Navbar from './Navbar';
import Footer from './Footer';
const HomePage = ({ userDetails }) => {
  return (
    <>
      <Navbar userInfo={userDetails} />
      <HeroSection />
      <FeaturedSection />
      <LocationSection />
      <LocationList />
      <ApartmentFeatures />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
