import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import LocationSection from './components/LocationSection';
import LocationList from './components/LocationList';
import ApartmentFeatures from './components/ApartementFeatures';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <LocationSection />
      <LocationList />
      <ApartmentFeatures />
    </div>
  );
}

export default App;
