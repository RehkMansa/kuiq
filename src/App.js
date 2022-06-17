import { auth, db, handleUserProfile } from './components/firebase/utils';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUP from './components/SignUp';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import AgentPage from './components/Agents';
import Error404page from './components/404';
const Container = styledComponents.main`
  & > section,
  & > footer{
    padding: 40px 5%;
  }
  & > header{
    padding: 10px 5%;
  }
`;

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await handleUserProfile(user);
        onSnapshot(userData, (snapshot) => {
          console.log('Current data: ', snapshot.data());
          setCurrentUser({ ...snapshot.data() });
          console.log(currentUser);
        });
      } else {
        setCurrentUser('');
        console.log('User Not Logged In');
      }
    });
  }, []);
  return (
    <Container className="App">
      <GlobalStyles />
      <Navbar modal={setShowModal} userDetails={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage userDetails={currentUser} />} />
        <Route
          path="/agents"
          element={<AgentPage userDetails={currentUser} />}
        />
        <Route path="*" element={<Error404page />} />
      </Routes>
      <Footer />
      {showModal && <SignUP modal={setShowModal} />}
    </Container>
  );
}

export default App;
