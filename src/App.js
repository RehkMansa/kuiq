import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import LocationSection from './components/LocationSection';
import LocationList from './components/LocationList';
import ApartmentFeatures from './components/ApartementFeatures';
import Testimonials from './components/Testimonials';

const Container = styledComponents.main`
  & > *{
    
    padding: 40px 5%;
  }
`;

function App() {
  return (
    <Container className="App">
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <LocationSection />
      <LocationList />
      <ApartmentFeatures />
      <Testimonials />
    </Container>
  );
}

export default App;
