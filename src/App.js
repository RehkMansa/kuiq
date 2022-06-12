import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Header from './components/Header';
import Homepage from './components/homepage';
import StorePage from './components/store';
import { Route, Routes } from 'react-router-dom';
import UserRegistration from './components/user/Registration';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/sign-up" element={<UserRegistration />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
