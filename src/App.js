import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Navbar from './components/styles/Navbar';
import HeroSection from './components/styles/HeroSection';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
